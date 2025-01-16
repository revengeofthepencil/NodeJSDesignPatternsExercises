import { createWriteStream } from 'fs';
import { createServer } from 'net';
import { join } from 'path';
import { createDecipheriv, randomBytes } from 'crypto';

const SERVER_PORT = 9090;
const OUTPUT_DIR = '/tmp';
const DEBUG_KEY = 'd32c5afca6151e0b00c629470e86b76667e0920bca1fd05b';

const secretServer = DEBUG_KEY ? Buffer.from(DEBUG_KEY, 'hex') : randomBytes(24);
console.log(`Generated secret: ${secretServer.toString('hex')}`);
function demultiplexChannel(source) {
	let buffer = Buffer.alloc(0); // Accumulate incomplete data here
	const destinations = {};

	source.on('data', chunk => {
		buffer = Buffer.concat([buffer, chunk]); // Append incoming chunk to buffer

		while (buffer.length >= 6) {
			// Ensure we have at least the header (1 byte channel, 1 byte type, 4 bytes length)
			const currentChannel = buffer.readUInt8(0);
			const currentType = buffer.readUInt8(1);
			const currentLength = buffer.readUInt32BE(2);

			if (buffer.length < 6 + currentLength) {
				// Wait for the complete payload to arrive
				break;
			}

			// Extract the payload
			const payload = buffer.slice(6, 6 + currentLength);

			// Handle the packet based on the type
			console.log(`Received packet: Channel = ${currentChannel}, Type = ${currentType}, Length = ${currentLength}`);
			if (!destinations[currentChannel]) {
				const fileName = `${currentChannel}_out.txt`;
				console.log(`Creating new file for Channel ${currentChannel}: ${fileName}`);
				destinations[currentChannel] = createWriteStream(join(OUTPUT_DIR, fileName));
			}

			if (currentType === 1) {
				// Write data to the destination file
				destinations[currentChannel].write(payload);
			} else {
				console.log(`Unsupported packet type: ${currentType}`);
			}

			// Remove processed packet from buffer
			buffer = buffer.slice(6 + currentLength);
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
