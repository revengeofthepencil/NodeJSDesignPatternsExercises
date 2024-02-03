/* eslint-disable no-restricted-syntax */
const timePoints = [500, 2500, 3100];

function delay(milliseconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(new Date());
		}, milliseconds);
	});
}

const promiseAllTheirs = async promises => {
	const dates = await Promise.all(promises);
	console.log(`promiseAllTheirs ends with ${JSON.stringify(dates)}`);
};

const promiseAllMine = async promises => {
	const dates = [];

	for (const promise of promises) {
		// eslint-disable-next-line no-await-in-loop
		const res = await promise;
		dates.push(res);
	}

	console.log(`promiseAllMine ends with ${JSON.stringify(dates)}`);
};

const promises = timePoints.map(ms => delay(ms));
promiseAllTheirs(promises);
promiseAllMine(promises);
