/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import Redis from 'ioredis';

const REDIS_URL = process.env.REDIS_URL || 'redis://redis-consumer:6379';

const redisClient = new Redis(REDIS_URL);

async function main() {
	console.log('Collector started, waiting for results...');
	let lastRecordId = '$';
	while (true) {
		const data = await redisClient.xread(
			'BLOCK', '0', 'STREAMS', 'results_stream', lastRecordId);
		for (const [, logs] of data) {
			for (const [recordId, [, message]] of logs) {
				console.log(`Message from worker: ${message}`);
				lastRecordId = recordId;
			}
		}
	}
}

main().catch(err => console.error(err));
