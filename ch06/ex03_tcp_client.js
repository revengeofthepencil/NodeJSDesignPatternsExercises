import { createReadStream } from 'fs';
import { basename } from 'path';
import { createConnection } from 'net';
import { createCipheriv, randomBytes } from 'crypto';

const DEBUG_KEY = null; // 'd32c5afca6151e0b00c629470e86b76667e0920bca1fd05b';

const key = DEBUG_KEY || process.argv[2];
if (!key || key.length !== 48) {
	console.error('Error: The key must be a 48-character hexadecimal string.');
	process.exit(1);
}

console.log(`key = ${key}`);

const filePaths = process.argv.slice(3);
const secret = Buffer.from(key, 'hex');
const iv = randomBytes(16);
const SERVER_PORT = 9090;
console.log(`iv = ${iv}`);

filePaths.forEach(filePath => {
	const client = createConnection(SERVER_PORT, 'localhost', () => {
		console.log('Connected to server');
		const filename = basename(filePath);
		const filenameLength = Buffer.byteLength(filename);
		const readStream = createReadStream(filePath)
			.pipe(createCipheriv('aes192', secret, iv));

		// Create metadata buffer (1 byte for filename length, filename length, and IV length)
		const metadata = Buffer.alloc(1 + filenameLength + iv.length);
		// filename length
		metadata.writeUInt8(filenameLength, 0);

		// filename
		metadata.write(filename, 1, 'utf8');
		// iv

		iv.copy(metadata, 1 + filenameLength);

		// Write the metadata to the server
		client.write(metadata);

		readStream.pipe(client);
	});

	client.on('end', () => {
		console.log('Disconnected from server');
	});
});
