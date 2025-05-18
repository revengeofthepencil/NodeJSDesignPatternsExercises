/* eslint-disable no-loop-func */
/* eslint-disable import/extensions */
/*
11.2 Batching and caching with callbacks: Implement batching and caching for the totalSales API
examples using only callbacks, streams, and events (without using promises or async/await). Hint:
Pay attention to Zalgo when returning cached values!
*/
import superagent from 'superagent';

const baseUrl = 'http://localhost:8000';

const products = ['book', 'game', 'app', 'song', 'movie'];

const runBatches = {};
const runQuery = (product, callback) => {
	const fullUrl = `${baseUrl}?product=${product}`;
	if (!runBatches[product]) {
		runBatches[product] = [callback];
		superagent
			.get(fullUrl)
			.on('response', response => {
				console.log(`response = ${JSON.stringify(response)}`);
				console.log(`fullUrl = ${fullUrl} finished with ${runBatches[product].length} batches`);
				const { body } = response;
				const sum = body ? body.sum : 0;
				runBatches[product].forEach(batchEntryCallback => {
					batchEntryCallback(sum);
				});
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

const runAllProducts = () => {
	// do each 1-5 times
	products.forEach(product => {
		const random = Math.floor(Math.random() * 5) + 1;
		console.log(`product = ${product}, random = ${random}`);
		let runCount = 0;
		while (runCount < random) {
			runCount += 1;
			const resultCallback = countForProduct => {
				console.log(`count for ${product} and runCount = ${runCount} = ${countForProduct}`);
			};
			runQuery(product, resultCallback);
		}
	});
};

runAllProducts();
