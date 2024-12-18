/*
5.4 An asynchronous map(): Implement a parallel asynchronous
version of Array.map() that supports promises and a concurrency limit.
The function should not directly leverage the TaskQueue or TaskQueuePC
classes we presented in this chapter, but it can use the underlying patterns.
The function, which we will define as mapAsync(iterable, callback, concurrency),
will accept the following as inputs:
An iterable, such as an array.
A callback, which will receive as the input each item of the iterable
(exactly like in the original Array.map()) and can return either a Promise
or a simple value.

A concurrency, which defines how many items in the iterable can be processed
by callback in parallel at each given time.
*/

const MAX_CONCURRENT = 5;

const mapAsync = (iterable, callback, concurrency) => {
	const resultMap = {};
	const iterableLength = iterable.length;
	const arrayOfIndexes = [];
	for (let i = 0; i < iterableLength; i++) {
		arrayOfIndexes.push(i);
	}
	console.log(`iterableLength = ${iterableLength}, concurrency = ${concurrency}`);
	const runNextTask = async () => {
		const nextIdx = arrayOfIndexes.shift();
		const nextTask = iterable.length > nextIdx ? iterable[nextIdx] : null;
		if (nextTask) {
			const taskRes = await nextTask();
			resultMap[nextIdx] = taskRes;
			const resultMapKeys = Object.keys(resultMap);
			if (resultMapKeys.length === iterableLength) {
				const sortedKeys = resultMapKeys.sort((a, b) => a - b);
				const sortedValues = sortedKeys.map(key => resultMap[key]);
				callback(sortedValues);
			} else if (arrayOfIndexes.length > 0) {
				runNextTask();
			}
		}
	};

	for (let i = 0; i < concurrency; i++) {
		runNextTask();
	}
};

const processTask = async taskName => {
	console.log(`Hot diggity! Starting task: ${taskName}`);

	// random delay between 500ms and 2500ms
	const delay = Math.floor(Math.random() * 2000) + 500;
	await new Promise(resolve => setTimeout(resolve, delay));
	return (`Completed task: ${taskName} in ${delay}ms`);
};

const tasks = [];
for (let i = 1; i <= 15; i++) {
	const currentName = `Task #${i}`;
	tasks.push(() => processTask(currentName));
}

const taskCallback = results => {
	console.log('Final results:');
	results.forEach(result => console.log(result));
};

mapAsync(tasks, taskCallback, MAX_CONCURRENT);
