import { randomBytes } from 'crypto';

function promisify(callbackBasedApi) {
	return function promisified(...args) {
		return new Promise((resolve, reject) => {
			const newPromiseFromCallback = (err, result) => {
				if (err) {
					return reject(err);
				}
				return resolve(result);
			};
			const newArgs = [
				...args,
				newPromiseFromCallback,
			];
			callbackBasedApi(...newArgs);
		});
	};
}

const randomBytesP = promisify(randomBytes);
randomBytesP(32)
	.then(buffer => {
		console.log(`Random bytes: ${buffer.toString()}`);
	});
