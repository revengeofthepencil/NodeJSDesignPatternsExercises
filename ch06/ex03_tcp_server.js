import { createWriteStream } from 'fs';
import { createServer } from 'net';
import { join } from 'path';
import { createDecipheriv, randomBytes } from 'crypto';

const SERVER_PORT = 9090;
const OUTPUT_DIR = '/tmp';
const DEBUG_KEY = null; // 'd32c5afca6151e0b00c629470e86b76667e0920bca1fd05b';

const secretServer = DEBUG_KEY ? Buffer.from(DEBUG_KEY, 'hex') : randomBytes(24);
console.log(`Generated secret: ${secretServer.toString('hex')}`);

const server = createServer(socket => {
	console.log('Client connected');
	let filename = null;
	let fileStream = null;
	let decipher = null;

	socket.on('data', chunk => {
		if (!filename) {
			// We need the filename length, filename, and content length
			const filenameLength = chunk.readUInt8(0);
			filename = chunk.toString('utf8', 1, 1 + filenameLength);
			const iv = chunk.slice(1 + filenameLength, 1 + filenameLength + 16);

			console.log(`Got data! file: ${filename}, filenameLength = ${filenameLength}. iv = ${iv}`);

			const destFilename = join(OUTPUT_DIR, filename);
			fileStream = createWriteStream(destFilename);

			// ok, we've got the filname, so the data to write should be everything else and decrypting
			decipher = createDecipheriv('aes192', secretServer, iv);

			const remainingData = chunk.slice(1 + filenameLength + 16);
			decipher.write(remainingData);
			decipher.pipe(fileStream);
		} else {
			// Write file content
			decipher.write(chunk);
		}
	});

	socket.on('end', () => {
		console.log(`File transfer complete: ${filename}`);
		if (decipher) decipher.end();
	});

	socket.on('error', err => {
		console.error('Error:', err.message);
		if (decipher) decipher.destroy();
	});
});

server.listen(SERVER_PORT, () => {
	console.log(`Server listening on port ${SERVER_PORT}`);
});
