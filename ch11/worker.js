import { parentPort } from 'worker_threads';

parentPort.on('message', async ({ funcString, funcArgs }) => {
	try {
		const fn = eval(`(${funcString})`);
		const result = await fn(funcArgs);
		parentPort.postMessage({ result });
	} catch (err) {
		parentPort.postMessage({ error: err.message });
	}
});
