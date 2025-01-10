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
import { PassThrough } from 'stream';
import { performance } from 'perf_hooks';

const createCompressionTimer = (name, completionCallback) => {
	const monitor = new PassThrough();

	let start;

	// Capture start time when the first chunk is processed
	monitor.on('pipe', () => {
		start = performance.now();
		console.log(`${name} compression started at ${start} ms`);
	});

	monitor.on('finish', () => {
		const end = performance.now();
		const runTime = end - start;
		console.log(`${name} step took ${runTime} ms. start = ${start}`);
		if (completionCallback) {
			completionCallback(runTime);
		}
	});

	return monitor;
};

const calculateCompressionPercentage = (originalSize, compressedSize) => {
	if (!originalSize || originalSize === 0) {
		console.warn('Original size must be greater than 0');
		return null;
	}
	return ((1 - compressedSize / originalSize) * 100).toFixed(2);
};

const compressFile = async (filePath, outputDir, compressFileCallback) => {
	const baseFilename = path.basename(filePath);
	console.log(`baseFilename = ${baseFilename}`);
	const outputPath = path.join(outputDir, baseFilename);
	console.log(`baseFilename = ${baseFilename}, outputPath = ${outputPath}`);
	const initSize = fs.statSync(filePath).size;
	const compressionResults = {};

	const compressionOpts = {
		gz: createGzip,
		bz: createBrotliCompress,
		def: createDeflate,
	};

	const totalLength = Object.keys(compressionOpts).length;
	let completed = 0;
	Object.entries(compressionOpts).forEach(([ext, compressionFn]) => {
		const inputStream = createReadStream(filePath);
		const outputFilePath = `${outputPath}.${ext}`;
		const completionCallback = runtime => {
			const finalSize = fs.statSync(outputFilePath).size;
			const compressionPct = calculateCompressionPercentage(initSize, finalSize);
			compressionResults[ext] = {
				runtime,
				finalSize,
				compressionPct,
			};
		};

		const timer = createCompressionTimer(ext, completionCallback);
		inputStream.pipe(compressionFn())
			.pipe(timer)
			.pipe(createWriteStream(outputFilePath))
			.on('finish', () => {
				completed += 1;
				timer.end();
				console.log(`finish for ${ext}. completed = ${completed}, totalLength = ${totalLength}`);
				if (completed === totalLength) {
					console.log('all set');
					compressFileCallback(compressionResults);
				}
			})
			.on('error', err => {
				console.error(`Error during ${ext} compression:`, err);
			});
	});
};

const DEFAULT_DEST = '/tmp';
const filePath = process.argv[2];
const dest = process.argv[3] || DEFAULT_DEST;
console.log(`filname = ${filePath}, dest = ${dest}`);

const compressFileCallback = results => {
	console.log(`results = ${JSON.stringify(results, null, 2)}`);
};
compressFile(filePath, dest, compressFileCallback);
