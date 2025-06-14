/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import Redis from 'ioredis';

import { generateTasks } from './generateTasks.js';

const REDIS_URL = process.env.REDIS_URL || 'redis://redis-consumer:6379';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const BATCH_SIZE = 10000;
const redisClient = new Redis(REDIS_URL);

const [, , maxLength, searchHash] = process.argv;

async function main() {
	console.log(`Producer started, generating tasks for length ${maxLength}...`);
	const generatorObj = generateTasks(searchHash, ALPHABET,
		maxLength, BATCH_SIZE);
	for (const task of generatorObj) {
		await redisClient.xadd('tasks_stream', '*',
			'task', JSON.stringify(task));
	}

	console.log('All tasks generated');
	redisClient.disconnect();
}

main().catch(err => console.error(err));
