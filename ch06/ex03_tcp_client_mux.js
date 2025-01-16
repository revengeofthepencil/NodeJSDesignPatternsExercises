import { createReadStream } from 'fs';
import { basename } from 'path';
import { connect } from 'net';
import { createCipheriv, randomBytes } from 'crypto';

const DEBUG_KEY = 'd32c5afca6151e0b00c629470e86b76667e0920bca1fd05b';
const TRANSFER_TYPES = {
	METADATA: 0,
	FILE: 1,
};

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
console.log(`iv = ${iv.toString('hex')}`);

function multiplexChannels(sources, destination) {
	let openChannels = sources.length;
	for (let i = 0; i < sources.length; i++) {
		const currentSource = sources[i];
		const { readStream, filename } = currentSource;
		const filenameLength = Buffer.byteLength(filename);

		// Create metadata buffer: 1 byte for channel, 1 byte for type,
		// 1 byte for filename length, filename length, and iv length
		const metadata = Buffer.alloc(1 + 1 + 1 + filenameLength + iv.length);
		metadata.writeUInt8(i, 0);
		metadata.writeUInt8(TRANSFER_TYPES.METADATA, 1);
		metadata.writeUInt8(filenameLength, 2);
		metadata.write(filename, 3, 'utf8');
		iv.copy(metadata, 3 + filenameLength);
		console.log(`sending metadata to channel ${i} with file name ${filename}`);
		destination.write(metadata);

		console.log(`source ${i} has filename ${filename} with length ${filenameLength}`);
		readStream.on('readable', function () {
			let chunk;
			// eslint-disable-next-line no-cond-assign
			while ((chunk = this.read()) !== null) {
				const outBuff = Buffer.alloc(1 + 1 + 4 + chunk.length);
				outBuff.writeUInt8(i, 0);
				outBuff.writeUInt8(TRANSFER_TYPES.FILE, 1);
				outBuff.writeUInt32BE(chunk.length, 2);
				chunk.copy(outBuff, 6);
				console.log(`Sending packet to channel: ${i}`);
				destination.write(outBuff);
			}
		})
			.on('end', () => {
				if (--openChannels === 0) {
					destination.end();
				}
			});
	}
}

const socket = connect(SERVER_PORT, () => {
	const streamsFileNames = filePaths.map(filePath => {
		const filename = basename(filePath);
		const readStream = createReadStream(filePath)
			.pipe(createCipheriv('aes192', secret, iv));
		return {
			filename,
			readStream,
		};
	});
	multiplexChannels(streamsFileNames, socket);
});
