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
import { Transform, PassThrough } from 'stream';
import { performance } from 'perf_hooks';

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const createCompressionTimer = name => {
	const monitor = new PassThrough();
	const newTime = performance.now();
	console.log(`do that thing at ${newTime}`);

	let start;

	// Capture start time when the first chunk is processed
	monitor.on('pipe', () => {
	  start = performance.now();
	  console.log(`${name} compression started at ${start}ms`);
	});

	monitor.on('finish', () => {
	  const end = performance.now();
	  console.log(`${name} step took ${end - start}ms. start = ${start}, newTime = ${newTime}`);
	});

	return monitor;
};

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


	const compressionNamesOpts = {
		gz: createGzip,
		bz: createBrotliCompress,
		def: createDeflate,
	};
	const gzTimer = createCompressionTimer('gz');
	await sleep(3000); // Wait for one second
	const gzipStream = createGzip()
		.pipe(gzTimer)
		.pipe(createWriteStream(`${outputPath}.gz`)).on('finish', () => {
			console.log('gzip done.');
		});

	gzTimer.end();

	const bzipStream = createBrotliCompress()
		.pipe(createCompressionTimer('bz'))
		.pipe(createWriteStream(`${outputPath}.bz`));
	const deflateStream = createDeflate()
		.pipe(createWriteStream(`${outputPath}.def`));

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
