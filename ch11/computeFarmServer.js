import { createServer } from 'http';
import { Worker } from 'worker_threads';

const MAX_WORKERS = 3;
const workers = [];
// worker can be either 'waiting' or 'busy'
const workerStatus = new Map();
const taskQueue = [];

function createWorker() {
	const worker = new Worker('./worker.js');
	workerStatus.set(worker, 'waiting');
	const customId = `worker-${worker.threadId}_${new Date().getTime()}`;
	worker.once('online', () => {
		console.log(`Worker ${customId} is online`);
	});
	worker.once('exit', code => {
		console.log(`Worker ${customId} exited with code ${code}`);
		workerStatus.delete(worker);
	});
	return worker;
}

function getWaitingWorker() {
	// eslint-disable-next-line no-restricted-syntax
	for (const worker of workers) {
		if (workerStatus.get(worker) === 'waiting') {
			return worker;
		}
	}

	if (workers.length < MAX_WORKERS) {
		console.log('no worker available, creating a new one');
		const newWorker = createWorker();
		workers.push(newWorker);
		return newWorker;
	}

	return null;
}

function runTask({ functionString, argsInput, res }) {
	const worker = getWaitingWorker();
	if (worker) {
		workerStatus.set(worker, 'busy');

		const maybeTerminateWorker = () => {
			workerStatus.set(worker, 'waiting');
			if (taskQueue.length > 0) {
				const nextTask = taskQueue.shift();
				runTask(nextTask);
			} else {
				// No more tasks, terminate this worker if we have more than 1
				console.log(`Terminating worker ${worker.threadId} (idle, no tasks)`);
				worker.terminate();
				const idx = workers.indexOf(worker);
				if (idx !== -1) workers.splice(idx, 1);
				workerStatus.delete(worker);
			}
		};

		const handleError = err => {
			// I hate allowing the call-before-define, but this got tricky
			// eslint-disable-next-line no-use-before-define
			worker.off('message', handleMessage);
			worker.off('error', handleError);
			maybeTerminateWorker();

			if (taskQueue.length > 0) {
				const nextTask = taskQueue.shift();
				runTask(nextTask);
			}
			res.writeHead(500);
			res.end(`Error: ${err.message}`);
		};

		const handleMessage = ({ result: currentRes, error }) => {
			worker.off('message', handleMessage);
			worker.off('error', handleError);
			maybeTerminateWorker();
			// If there are queued tasks, run the next one
			if (taskQueue.length > 0) {
				const nextTask = taskQueue.shift();
				runTask(nextTask);
			}
			if (error) {
				res.writeHead(500);
				return res.end(`Error: ${error}`);
			}
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ result: currentRes }));
		};

		worker.on('message', handleMessage);
		worker.on('error', handleError);
		worker.postMessage({ funcString: functionString, funcArgs: argsInput });
	} else {
		// No waiting worker, queue the task
		taskQueue.push({ functionString, argsInput, res });
	}
}

createServer((req, res) => {
	if (req.method !== 'POST') {
		res.writeHead(405);
		return res.end('Method Not Allowed');
	}

	let body = '';
	req.on('data', chunk => {
		body += chunk;
	});
	req.on('end', () => {
		try {
			const json = JSON.parse(body);
			const { function: functionString, arguments: argsInput } = json;
			runTask({ functionString, argsInput, res });
		} catch (err) {
			console.error(err);
			res.writeHead(500);
			res.end(`Error: ${err.message}`);
		}
	});
}).listen(8000, () => console.log('Server started on port 8000'));
