/* eslint-disable import/extensions */
import Chance from 'chance';

import { RandomStream } from './random-stream.js';

const randomStream = new RandomStream();
randomStream
	.on('data', chunk => {
		console.log(`Chunk received (${chunk.length} bytes): ${chunk.toString()}`);
	})
	.on('end', () => {
		console.log(`Produced ${randomStream.emittedBytes} bytes of random data`);
		const testRandomString = new Chance().string({ length: 24 });
		console.log(`testRandomString: ${testRandomString}`);
	});
