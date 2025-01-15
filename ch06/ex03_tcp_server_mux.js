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
	let currentChannel = null;
	let currentLength = null;
	const destinations = {};
	source
		.on('readable', () => {
			let chunk;
			if (currentChannel === null) {
				chunk = source.read(1);
				currentChannel = chunk && chunk.readUInt8(0);
			}
			if (!destinations[currentChannel]) {
				const fileName = `${currentChannel}_out.txt`;
				console.log(`creating new filename for ${currentChannel}: ${fileName}`);
				destinations[currentChannel] = createWriteStream(join(OUTPUT_DIR, `${currentChannel}_out.txt`));
			}
			if (currentLength === null) {
				chunk = source.read(4);
				currentLength = chunk && chunk.readUInt32BE(0);
				if (currentLength === null) {
					return null;
				}
			}
			chunk = source.read(currentLength);
			if (chunk === null) {
				return null;
			}
			console.log(`Received packet from: ${currentChannel}`);
			destinations[currentChannel].write(chunk);
			currentChannel = null;
			currentLength = null;
		})
		.on('end', () => {
			Object.values(destinations).forEach(destination => destination.end());
			console.log('Source channel closed');
		});
}

const server = createServer(socket => {
	demultiplexChannel(socket);
});
server.listen(SERVER_PORT, () => console.log('Server started'));
