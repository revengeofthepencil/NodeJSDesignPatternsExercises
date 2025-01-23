import { createGzip, createBrotliCompress, createDeflate } from 'zlib';
import fs, { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { performance } from 'perf_hooks';
import { PassThrough } from 'stream';

const DEFAULT_DEST = '/tmp';

const calculateCompressionPercentage = (originalSize, compressedSize) => {
	if (!originalSize || originalSize === 0) {
		console.warn('Hold up there, Sparky! You must provide a size greater than 0');
		return null;
	}
	return ((1 - compressedSize / originalSize) * 100).toFixed(2);
};

class CompressionTimer extends PassThrough {
	constructor(compressionType, initSize, outputPath, options = {}) {
		super(options);
		this.compressionType = compressionType;
		this.startTime = null;
		this.initSize = initSize;
		this.outputPath = outputPath;
		this.bytesWritten = 0;
	}

	_transform(chunk, _, cb) {
		if (!this.startTime) {
			this.startTime = performance.now();
		}
		this.bytesWritten += chunk.length;
		cb(null, chunk);
	}

	_flush(cb) {
		const finalSize = fs.statSync(this.outputPath).size;
		const compressionPct = calculateCompressionPercentage(this.initSize, finalSize);
		const endTime = performance.now();
		const runTime = endTime - this.startTime;
		console.log(
			`${this.compressionType}: Compression Percentage = ${compressionPct}%,  Time = ${runTime}ms, Bytes Written = ${this.bytesWritten}`
		);
		cb();
	}
}

const compressFile = (filePath, outputDir) => {
	const baseFilename = path.basename(filePath);
	const outputPath = path.join(outputDir, baseFilename);
	const initSize = fs.statSync(filePath).size;

	const compressionOpts = {
		gz: createGzip,
		bz: createBrotliCompress,
		def: createDeflate,
	};

	const inputStream = createReadStream(filePath).pause();
	const totalTasks = Object.keys(compressionOpts).length;
	let completedTasks = 0;

	const checkCompletion = () => {
		completedTasks += 1;
		if (completedTasks === totalTasks) {
			console.log('Done!');
		}
	};

	Object.entries(compressionOpts).forEach(([ext, compressionFn]) => {
		const outputFilePath = `${outputPath}.${ext}`;
		const timer = new CompressionTimer(ext, initSize, outputFilePath);

		inputStream
			// this is just here to fork the input stream
			.pipe(new PassThrough())
			.pipe(compressionFn())
			.pipe(timer)
			.pipe(createWriteStream(outputFilePath))
			.on('finish', () => {
				console.log(`${ext} Compression finished.`);
				checkCompletion();
			})
			.on('error', err => {
				console.error(`Error during ${ext} compression:`, err);
				// even on errors, we want to mark this complete
				checkCompletion();
			});
	});

	inputStream.resume();
};

const filePath = process.argv[2];
const dest = process.argv[3] || DEFAULT_DEST;

if (!filePath) {
	console.error('Error: No input file provided.');
	process.exit(1);
}

compressFile(filePath, dest);
