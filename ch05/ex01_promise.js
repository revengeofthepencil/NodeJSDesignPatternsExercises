/*
5.1 Dissecting Promise.all(): Implement your own version of Promise.all()
leveraging promises, async/await, or a combination of the two. The
function must be functionally equivalent to its original counterpart.
*/

const myPromiseAll = async promises => {
	const results = [];
	// eslint-disable-next-line no-restricted-syntax
	for (const promise of promises) {
		// eslint-disable-next-line no-await-in-loop
		const result = await promise;
		results.push(result);
	}

	return results;
};

const promiseArray = [];
for (let i = 1; i <= 10; i++) {
	promiseArray.push(
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(`promise #${i} resolved`);
			}, 1000);
		})
	);
}

Promise.all(promiseArray).then(results => {
	console.log(`results of built-in = ${JSON.stringify(results)}\n`);
});

myPromiseAll(promiseArray).then(results => {
	console.log(`results of my version = ${JSON.stringify(results)}\n`);
});
