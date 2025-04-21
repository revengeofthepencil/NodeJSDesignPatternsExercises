/* eslint-disable import/extensions */
/*
Exercise 9.5 Queues with iterators: Implement an AsyncQueue class similar to one of the TaskQueue
classes we defined in Chapter 5, Asynchronous Control Flow Patterns with Promises and Async/Await,
but with a slightly different behavior and interface. Such an AsyncQueue class will have a method
called enqueue() to append new items to the queue and then expose an @@asyncIterable method, which
should provide the ability to process the elements of the queue asynchronously, one at a time (so,
with a concurrency of 1). The async iterator returned from AsyncQueue should terminate only after
the done() method of AsyncQueue is invoked and only after all items in the queue are consumed.
Consider that the @@asyncIterable method could be invoked in more than one place, thus returning an
additional async iterator, which would allow you to increase the concurrency with which the queue
is consumed.

*/

import { AsyncQueueTask5 } from './AsyncQueueTask5.js';

const processTask = async taskName => {
	// random delay between 500ms and 2500ms
	const delay = Math.floor(Math.random() * 2000) + 500;
	await new Promise(resolve => setTimeout(resolve, delay));
	return (`Completed task: ${taskName} in ${delay}ms`);
};

const queue = new AsyncQueueTask5();
for (let i = 1; i <= 10; i++) {
	const currentName = `Task #${i}`;
	queue.enqueue(() => processTask(currentName));
}
const runIterator = async (iterator, iteratorIdx) => {
	// eslint-disable-next-line no-restricted-syntax
	for await (const iterationResult of iterator) {
		console.log(`value from iteratorIdx ${iteratorIdx} = ${iterationResult}`);
	}
};

const iterator1 = queue[Symbol.asyncIterator]();
const iterator2 = queue[Symbol.asyncIterator]();

[iterator1, iterator2].forEach((iterator, iteratorIdx) => runIterator(iterator, iteratorIdx));
