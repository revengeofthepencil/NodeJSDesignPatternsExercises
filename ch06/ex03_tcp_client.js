import { request } from 'http';
import { createGzip } from 'zlib';
import { createReadStream } from 'fs';
import { basename } from 'path';
import { fork } from 'child_process';
import { connect, createConnection } from 'net';

const filePaths = process.argv.slice(2);

const SERVER_PORT = 9090;

filePaths.forEach(filePath => {
	const client = createConnection(SERVER_PORT, 'localhost', () => {
		console.log('Connected to server');
		const filename = basename(filePath);
		const filenameLength = Buffer.byteLength(filename);
		const readStream = createReadStream(filePath);

		// Create metadata buffer
		const metadata = Buffer.alloc(1 + 4 + filenameLength);
		metadata.writeUInt8(filenameLength, 0);
		metadata.write(filename, 1, 'utf8');
		metadata.writeUInt32BE(readStream.bytesRead, 1 + filenameLength);
		client.write(metadata);
		readStream.pipe(client);
	});

	client.on('end', () => {
		console.log('Disconnected from server');
	});
});
