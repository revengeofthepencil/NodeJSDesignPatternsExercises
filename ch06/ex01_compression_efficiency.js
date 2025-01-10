/*
6.1 Data compression efficiency: Write a command-line script that takes
a file as input and compresses it using the different algorithms available in
the zlib module (Brotli, Deflate, Gzip). You want to produce a summary table
that compares the algorithm's compression time and compression efficiency on the
given file. Hint: This could be a good use case for the fork pattern, but remember
that we made some important performance considerations when we discussed it earlier in this chapter.
*/
import { createGzip, createBrotliCompress, createDeflate } from 'zlib';
import fs, { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { Transform, pipeline } from 'stream';

class CompressionReporter extends Transform {
	constructor(initFileSize, options = {}) {
		super(options);
		this.initFileSize = initFileSize;
		this.report = {};
	}

	_transform(newFile, cb) {
		const finalSize = fs.statSync(newFile).size;
		const fileExtenion = path.extname('index.html');
		const diff = this.initFileSize - finalSize;
		const pctCompressed = diff / this.initFileSize;
		this.report[fileExtenion] = {
			finalSize,
			diff,
			pctCompressed,
		};
		cb();
	}

	_flush(cb) {
		this.push(this.total.toString());
		cb();
	}
}

const compressFile = async (filePath, outputDir) => {
	const baseFilename = path.basename(filePath);
	console.log(`baseFilename = ${baseFilename}`);
	const outputPath = path.join(outputDir, baseFilename);
	console.log(`baseFilename = ${baseFilename}, outputPath = ${outputPath}`);
	const initSize = fs.statSync(filePath).size;
	const compressionResults = {
		gzip: {
			initSize,
		},
	};

	const gzipStream = createGzip().pipe(createWriteStream(`${outputPath}.gz`)).on('finish', () => {
		console.log('gzip done.');
	});
	const bzipStream = createBrotliCompress().pipe(createWriteStream(`${outputPath}.bz`));
	const deflateStream = createDeflate().pipe(createWriteStream(`${outputPath}.def`));

	const inputStream = createReadStream(filePath);
	inputStream
		.pipe(gzipStream);

	inputStream
		.pipe(bzipStream);

	inputStream
		.pipe(deflateStream);
};

const DEFAULT_DEST = '/tmp';
const filePath = process.argv[2];
const dest = process.argv[3] || DEFAULT_DEST;
console.log(`filname = ${filePath}, dest = ${dest}`);
compressFile(filePath, dest);
