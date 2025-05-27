/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
import { createServer } from 'http';
import { cpus } from 'os';
import cluster from 'cluster';
import { once } from 'events';

if (cluster.isPrimary) {
	const availableCpus = cpus();
	console.log(`Clustering to ${availableCpus.length} processes`);
	availableCpus.forEach(() => cluster.fork());
	process.on('SIGUSR2', async () => {
		console.log('SIGUSR2 received, restarting workers');
		const workers = Object.values(cluster.workers);
		// eslint-disable-next-line no-restricted-syntax
		for (const worker of workers) {
			console.log(`Stopping worker: ${worker.process.pid}`);
			worker.disconnect();
			await once(worker, 'exit');
			if (!worker.exitedAfterDisconnect) {
				continue;
			}
			const newWorker = cluster.fork(); // (4)
			await once(newWorker, 'listening'); // (5)
		}
	});
} else {
	const { pid } = process;
	const server = createServer((_, res) => {
		let i = 1e7; while (i > 0) { i--; }
		console.log(`Handling request from ${pid}`);
		res.end(`Hello from ${pid}\n`);
	});
	server.listen(8080, () => console.log(`Started at ${pid}`));
}
