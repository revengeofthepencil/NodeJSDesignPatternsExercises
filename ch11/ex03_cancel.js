/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/*
11.3 Deep async cancelable: Extend the createAsyncCancelable() function so that it's possible to
invoke other cancelable functions from within the main cancelable function. Canceling the main
operation should also cancel all nested operations. Hint: Allow to yield the result of an
asyncCancelable() from within the generator function.
*/

import { CancelError } from './cancelError.js';
import { asyncRoutine } from './asyncRoutine.js';

const isCancelable = checkObj => (
	checkObj &&
    typeof checkObj === 'object' &&
    typeof checkObj.promise === 'object' &&
    typeof checkObj.cancel === 'function'
);

export function createAsyncCancelable(generatorFunction) {
	const internalCancelQueue = [];
	return function asyncCancelable(...args) {
		const generatorObject = generatorFunction(...args);
		let cancelRequested = false;
		function cancel() {
			console.log(`ya canceled with an internalCancelQueue of length ${internalCancelQueue.length}`);
			cancelRequested = true;
			internalCancelQueue.forEach(toCancel => {
				console.log('cancel internal request');
				toCancel();
			});
		}

		const promise = new Promise((resolve, reject) => {
			// eslint-disable-next-line consistent-return
			async function nextStep(prevResult) {
				if (cancelRequested) {
					return reject(new CancelError());
				}
				if (prevResult.done) {
					return resolve(prevResult.value);
				}

				try {
					const yielded = prevResult.value;
					if (isCancelable(yielded)) {
						internalCancelQueue.push(yielded.cancel);
						const nestedResult = await yielded.promise;
						nextStep(generatorObject.next(nestedResult));
					} else {
						const result = await yielded;
						nextStep(generatorObject.next(result));
					}
				} catch (err) {
					try {
						nextStep(generatorObject.throw(err));
					} catch (err2) {
						reject(err2);
					}
				}
			}

			return nextStep({});
		});
		return { promise, cancel };
	};
}

const cancelable = createAsyncCancelable(function* () {
	const resA = yield asyncRoutine('A');
	const nestedResultAA = yield createAsyncCancelable(function* () {
		yield asyncRoutine('AA');
	})();
	console.log(`nested result AA = ${nestedResultAA}`);
	console.log(resA);

	const resB = yield asyncRoutine('B');
	const nestedResultAB = yield createAsyncCancelable(function* () {
		yield asyncRoutine('AB');
	})();
	console.log(`nested result AB = ${nestedResultAB}`);

	console.log(resB);

	const resC = yield asyncRoutine('C');
	console.log(resC);
});
const { promise, cancel } = cancelable();
promise.catch(err => {
	if (err instanceof CancelError) {
		console.log('Function canceled');
	} else {
		console.error(err);
	}
});

setTimeout(() => {
	cancel();
}, 200);
