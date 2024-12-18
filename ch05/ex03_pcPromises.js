/* eslint-disable import/extensions */
/*
5.3 Producer-consumer with promises: Update the TaskQueuePC class internal
methods so that they use just promises, removing any use of the async/await
syntax. Hint: the infinite loop must become an asynchronous recursion. Beware
of the recursive Promise resolution memory leak!
*/

import { TaskQueuePC } from './TaskQueuePCEx03.js';

const MAX_CONCURRENT = 3;

const processTask = async taskName => {
	console.log(`Hot diggity! Starting task: ${taskName}`);

	// random delay between 500ms and 2500ms
	const delay = Math.floor(Math.random() * 2000) + 500;
	await new Promise(resolve => setTimeout(resolve, delay));
	return (`Completed task: ${taskName} in ${delay}ms`);
};

const tasks = [];
for (let i = 1; i <= 10; i++) {
	const currentName = `Task #${i}`;
	tasks.push(() => processTask(currentName));
}

const queue = new TaskQueuePC(MAX_CONCURRENT);
tasks.forEach(currentTask => queue.runTask(currentTask).then(res => console.log(res)));
