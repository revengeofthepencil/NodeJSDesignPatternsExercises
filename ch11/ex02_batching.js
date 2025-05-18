/* eslint-disable no-loop-func */
/* eslint-disable import/extensions */
/*
11.2 Batching and caching with callbacks: Implement batching and caching for the totalSales API
examples using only callbacks, streams, and events (without using promises or async/await). Hint:
Pay attention to Zalgo when returning cached values!
*/
import superagent from 'superagent';

const baseUrl = 'http://localhost:8000';

const PRODUCT_KEYS = ['book', 'game', 'app', 'song', 'movie'];
const CACHE_TTL = 7000;
const runBatches = {};
const cache = {};

const runQuery = (product, callback) => {
	const fullUrl = `${baseUrl}?product=${product}`;
	if (!runBatches[product]) {
		runBatches[product] = [callback];
		superagent
			.get(fullUrl)
			.on('response', response => {
				const { body } = response;
				const sum = body ? body.sum : 0;
				cache[product] = sum;
				setTimeout(() => {
					cache[product] = null;
				}, CACHE_TTL);

				const callbacks = runBatches[product];
				callbacks.forEach(batchEntryCallback => {
					batchEntryCallback(sum);
				});
				// be sure to clear out the run batches so we can execute again
				runBatches[product] = null;
			})
			.end((err, _) => {
				if (err) {
					console.error(err);
				}
			});
	} else {
		runBatches[product].push(callback);
	}
};
const getCountForProduct = (product, callback) => {
	if (cache[product] || cache[product] === 0) {
		process.nextTick(() => {
			callback(cache[product]);
		});
	} else {
		runQuery(product, callback);
	}
};

const runAllProducts = runNumber => {
	// do each 1-5 times
	PRODUCT_KEYS.forEach(product => {
		const random = Math.floor(Math.random() * 5) + 1;
		let runCount = 0;
		while (runCount < random) {
			runCount += 1;
			const resultCallback = countForProduct => {
				console.log(`count for ${product} with runNumber ${runNumber} and runCount = ${runCount} = ${countForProduct}`);
			};
			getCountForProduct(product, resultCallback);
		}
	});
};

runAllProducts(1);

console.log('wait 5 seconds for second run');
setTimeout(() => {
	console.log('kick off second run after 5 seconds');
	runAllProducts(2);
}, 5000);

console.log('wait 10 seconds for third run');
setTimeout(() => {
	console.log('kick off third run after 10 seconds');
	runAllProducts(3);
}, 10000);
