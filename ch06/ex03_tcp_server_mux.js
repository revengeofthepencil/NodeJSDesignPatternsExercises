import { createReadStream, createWriteStream } from 'fs';
import { createServer } from 'net';
import { join } from 'path';
import { createDecipheriv, randomBytes } from 'crypto';

const SERVER_PORT = 9090;
const OUTPUT_DIR = '/tmp';
const DEBUG_KEY = 'd32c5afca6151e0b00c629470e86b76667e0920bca1fd05b';
const TRANSFER_TYPES = {
	METADATA: 0,
	FILE: 1,
};

const secretServer = DEBUG_KEY ? Buffer.from(DEBUG_KEY, 'hex') : randomBytes(24);
console.log(`Generated secret: ${secretServer.toString('hex')}`);

const processFileChunk = (buffer, currentLength, output) => {
	// Extract the payload
	const payload = buffer.slice(6, 6 + currentLength);
	output.write(payload);
	// Remove processed packet from buffer
	return buffer.slice(6 + currentLength);
};

const processMetadata = buffer => {
	const filenameLength = buffer.readUInt8(2);
	const filename = buffer.toString('utf8', 3, 3 + filenameLength);
	const iv = buffer.slice(3 + filenameLength, 3 + filenameLength + 16);
	console.log(`Got data! file: ${filename}, filenameLength = ${filenameLength}. iv = ${iv}`);
	const destFilename = join(OUTPUT_DIR, filename);
	const fileStream = createWriteStream(destFilename);
	// ok, we've got the filname, so the data to write should be everything else and decrypting
	const decipher = createDecipheriv('aes192', secretServer, iv);
	return decipher.pipe(fileStream);
};

function demultiplexChannel_bak(source) {
	let buffer = Buffer.alloc(0);
	const destinations = {};

	source.on('data', chunk => {
		buffer = Buffer.concat([buffer, chunk]);

		while (buffer.length >= 6) {
			// Ensure we have at least the header (1 byte channel, 1 byte type, 4 bytes length)
			const currentChannel = buffer.readUInt8(0);
			const currentType = buffer.readUInt8(1);
			const currentLength = buffer.readUInt32BE(2);
			console.log(`currentChannel = ${currentChannel}, currentType = ${currentType}, currentLength = ${currentLength}, buffer.length = ${buffer.length}`);

			if (currentType === TRANSFER_TYPES.METADATA) {
				console.log(`\n\ndo the metadata thing for ${currentChannel} / ${currentType}\n`);
				destinations[currentChannel] = processMetadata(buffer);
				buffer = Buffer.alloc(0);
			} else if (currentType === TRANSFER_TYPES.FILE) {
				if (!destinations[currentChannel]) {
					const fileName = `${currentChannel}_out.txt`;
					console.log(`Creating new file for Channel ${currentChannel}: ${fileName}`);
					destinations[currentChannel] = createWriteStream(join(OUTPUT_DIR, fileName));
				}

				if (buffer.length < 6 + currentLength) {
					// Wait for the complete payload to arrive
					break;
				}

				// Handle the packet based on the type
				console.log(`Received packet: Channel = ${currentChannel}, Type = ${currentType}, Length = ${currentLength}`);
				buffer = processFileChunk(buffer, currentLength, destinations[currentChannel]);
				console.log(`buffer length after process file chunk = ${buffer.length}`);
			}
		}
	});

	source.on('end', () => {
		// Close all destination streams
		Object.values(destinations).forEach(destination => destination.end());
		console.log('Source channel closed');
	});
}

function demultiplexChannel(source) {
	let buffer = Buffer.alloc(0);
	const destinations = {};

	source.on('data', chunk => {
		buffer = Buffer.concat([buffer, chunk]);

		while (buffer.length >= 6) {
			// Read the header (1 byte channel, 1 byte type, 4 bytes payload
			// length or metadata filename length)
			const currentChannel = buffer.readUInt8(0);
			const currentType = buffer.readUInt8(1);

			// Different logic for METADATA and FILE types
			const currentLength = currentType === TRANSFER_TYPES.METADATA
				? buffer.readUInt8(2)
				: buffer.readUInt32BE(2);

			console.log(`Header: Channel = ${currentChannel}, Type = ${currentType}, Length = ${currentLength}`);
			console.log(`Buffer length: ${buffer.length}`);

			if (currentType === TRANSFER_TYPES.METADATA) {
				// Metadata packet requires: header (6 bytes) + filename + IV
				const metadataLength = 3 + currentLength + 16;

				if (buffer.length < metadataLength) {
					console.log(`Insufficient data for metadata. Expected: ${metadataLength}, Got: ${buffer.length}`);
					break; // Wait for the full metadata packet
				}

				// Extract metadata
				const filenameLength = buffer.readUInt8(2);
				const filename = buffer.toString('utf8', 3, 3 + filenameLength);
				const iv = buffer.slice(3 + filenameLength, 3 + filenameLength + 16);
				console.log(`Received metadata: Channel = ${currentChannel}, File = ${filename}, IV = ${iv.toString('hex')}`);

				// Setup decryption and file stream
				const destFilename = join(OUTPUT_DIR, filename);
				const fileStream = createWriteStream(destFilename);
				const decipher = createDecipheriv('aes192', secretServer, iv);
				destinations[currentChannel] = decipher.pipe(fileStream);

				// Remove metadata packet from the buffer
				buffer = buffer.slice(metadataLength);
				console.log(`Buffer length after metadata: ${buffer.length}`);
			} else if (currentType === TRANSFER_TYPES.FILE) {
				// Check if the full payload is available
				if (buffer.length < 6 + currentLength) {
					console.log(`Insufficient data for file payload. Expected: ${6 + currentLength}, Got: ${buffer.length}`);
					break;
				}

				// Handle file data
				const fileChunk = buffer.slice(6, 6 + currentLength);
				if (destinations[currentChannel]) {
					destinations[currentChannel].write(fileChunk);
				} else {
					console.error(`No destination for Channel ${currentChannel}`);
				}

				// Remove file packet from the buffer
				buffer = buffer.slice(6 + currentLength);
				console.log(`Buffer length after file data: ${buffer.length}`);
			} else {
				console.error(`Unknown transfer type: ${currentType}`);
				buffer = buffer.slice(6 + currentLength); // Skip unknown packet
			}
		}
	});

	source.on('end', () => {
		// Close all destination streams
		Object.values(destinations).forEach(destination => destination.end());
		console.log('Source channel closed');
	});
}
const server = createServer(socket => {
	demultiplexChannel(socket);
});
server.listen(SERVER_PORT, () => console.log('Server started'));
