import { createWriteStream } from 'fs';
import { createServer } from 'net';
import { join } from 'path';
import { createDecipheriv, randomBytes } from 'crypto';
import { pipeline } from 'stream';

const SERVER_PORT = 9090;
const OUTPUT_DIR = '/tmp';
const DEBUG_KEY = 'd32c5afca6151e0b00c629470e86b76667e0920bca1fd05b';
const TRANSFER_TYPES = {
	METADATA: 0,
	FILE: 1,
};

const secretServer = DEBUG_KEY ? Buffer.from(DEBUG_KEY, 'hex') : randomBytes(24);
console.log(`secretServer: ${secretServer.toString('hex')}`);

function demultiplexChannel(source) {
	let buffer = Buffer.alloc(0);
	const destinations = {};

	source.on('data', chunk => {
		buffer = Buffer.concat([buffer, chunk]);

		while (buffer.length >= 6) {
			// Read the header (1 byte channel, 1 byte type,
			// 4 bytes payload length or metadata filename length)
			const currentChannel = buffer.readUInt8(0);
			const currentType = buffer.readUInt8(1);

			// Different logic for METADATA and FILE types
			const currentLength = currentType === TRANSFER_TYPES.METADATA
				? buffer.readUInt8(2)
				: buffer.readUInt32BE(2);

			console.log(`Header: Channel = ${currentChannel}, Type = ${currentType}, Length = ${currentLength}, buffer.length = ${buffer.length}`);

			if (currentType === TRANSFER_TYPES.METADATA) {
				// Metadata packet requires: header (6 bytes) + filename + IV
				const metadataLength = 3 + currentLength + 16;

				if (buffer.length < metadataLength) {
					// we don't have the full set of data in the buffer. hold up
					break;
				}

				const filenameLength = buffer.readUInt8(2);
				const filename = buffer.toString('utf8', 3, 3 + filenameLength);
				const iv = buffer.slice(3 + filenameLength, 3 + filenameLength + 16);
				console.log(`Received metadata: Channel = ${currentChannel}, File = ${filename}, IV = ${iv.toString('hex')}`);

				// build decryption and file stream
				const destFilename = join(OUTPUT_DIR, filename);
				const fileStream = createWriteStream(destFilename);
				const decipher = createDecipheriv('aes192', secretServer, iv);

				destinations[currentChannel] = { decipher, fileStream };

				// pipe into the file stream
				pipeline(decipher, fileStream, err => {
					if (err) {
						console.error(`Error during pipeline: ${err.message}`);
					} else {
						console.log(`Finished writing to ${destFilename}`);
					}
				});

				// drop metadata packet from the buffer
				buffer = buffer.slice(metadataLength);
				console.log(`Buffer length after metadata: ${buffer.length}`);
			} else if (currentType === TRANSFER_TYPES.FILE) {
				// is the payload available?
				if (buffer.length < 6 + currentLength) {
					console.log(`Not enough data for file payload. Expected: ${6 + currentLength}, got: ${buffer.length}`);
					break;
				}

				// woo hoo! We have the file data
				const fileChunk = buffer.slice(6, 6 + currentLength);
				if (destinations[currentChannel]) {
					const { decipher } = destinations[currentChannel];
					decipher.write(fileChunk);
				} else {
					console.error(`Whoa! No destination for Channel ${currentChannel}`);
				}

				// drop file packet from the buffer
				buffer = buffer.slice(6 + currentLength);
			} else {
				console.error(`Unknown transfer type: ${currentType}`);
			}
		}
	});

	source.on('end', () => {
		// close all decipher streams
		Object.values(destinations).forEach(({ decipher }) => {
			decipher.end();
		});
		console.log('Source channel closed!');
	});
}

const server = createServer(socket => {
	demultiplexChannel(socket);
});
server.listen(SERVER_PORT, () => console.log('Server started'));
