/*
5.2 TaskQueue with promises: Migrate the TaskQueue class internals
from promises to async/await where possible. Hint: you won't be
able to use async/await everywhere.
*/

/* eslint-disable import/extensions */
import { TaskQueueEx02 } from './TaskQueueEx02.js';

const MAX_CONCURRENT = 4;

const processTask = async taskName => {
	console.log(`Woo hoo! Starting task: ${taskName}`);
	const delay = Math.floor(Math.random() * 2000) + 500; // 500ms to 2500ms
	await new Promise(resolve => setTimeout(resolve, delay));
	return (`Completed task: ${taskName} in ${delay}ms`);
};

const tasks = [];
for (let i = 1; i <= 10; i++) {
	const currentName = `Task #${i}`;
	tasks.push(() => processTask(currentName));
}

const queue = new TaskQueueEx02(MAX_CONCURRENT);
tasks.forEach(currentTask => queue.runTask(currentTask).then(res => console.log(res)));
queue.on('empty', () => console.log('Task list complete. Queue is empty'));
