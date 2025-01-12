import { createWriteStream } from 'fs';
import { createServer } from 'net';
import { createGunzip } from 'zlib';
import { join } from 'path';

const SERVER_PORT = 9090;
const OUTPUT_DIR = '/tmp';

const server = createServer(socket => {
	console.log('Client connected');
	let filename = null;
	let fileStream = null;
	let contentLength = null;

	socket.on('data', chunk => {
		if (!filename) {
			// We need the filename length, filename, and content length
			const filenameLength = chunk.readUInt8(0);
			filename = chunk.toString('utf8', 1, 1 + filenameLength);
			console.log(`Got data! file: ${filename}, filenameLength = ${filenameLength}`);

			const destFilename = join(OUTPUT_DIR, filename);
			fileStream = createWriteStream(destFilename);

			// ok, we've got the filname, so the data to write should be everything else
			const remainingData = chunk.slice(1 + filenameLength + 4);
			fileStream.write(remainingData);
		} else {
			// Write file content
			fileStream.write(chunk);
		}
	});

	socket.on('end', () => {
		console.log(`File transfer complete: ${filename}`);
		if (fileStream) fileStream.end();
	});

	socket.on('error', err => {
		console.error('Error:', err.message);
		if (fileStream) fileStream.close();
	});
});

server.listen(SERVER_PORT, () => {
	console.log(`Server listening on port ${SERVER_PORT}`);
});
