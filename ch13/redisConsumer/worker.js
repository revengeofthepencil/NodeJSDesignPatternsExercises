/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import Redis from 'ioredis';

import { processTask } from './processTask.js';

const REDIS_URL = process.env.REDIS_URL || 'redis://redis-consumer:6379';

const redisClient = new Redis(REDIS_URL);
const [, , consumerName] = process.argv;

async function processAndAck(recordId, rawTask) {
	const found = processTask(JSON.parse(rawTask));
	if (found) {
		console.log(`Found! => ${found}`);
		await redisClient.xadd('results_stream', '*', 'result',
			`Found: ${found}`);
	}

	await redisClient.xack('tasks_stream', 'workers_group', recordId);
}

async function main() {
	await redisClient.xgroup('CREATE', 'tasks_stream',
		'workers_group', '$', 'MKSTREAM')
		.catch(() => console.log('Consumer group already exists'));

	const [[, recordsWaiting]] = await redisClient.xreadgroup(
		'GROUP', 'workers_group', consumerName, 'STREAMS',
		'tasks_stream', '0');
	for (const [recordId, [, rawTask]] of recordsWaiting) {
		await processAndAck(recordId, rawTask);
	}

	while (true) {
		const [[, recordsFromStream]] = await redisClient.xreadgroup(
			'GROUP', 'workers_group', consumerName, 'BLOCK', '0',
			'COUNT', '1', 'STREAMS', 'tasks_stream', '>');
		for (const [recordId, [, rawTask]] of recordsFromStream) {
			await processAndAck(recordId, rawTask);
		}
	}
}

main().catch(err => console.error(err));
