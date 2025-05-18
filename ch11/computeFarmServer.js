import { createServer } from 'http';
import { Worker } from 'worker_threads';

const MAX_WORKERS = 3;
const workers = [];
let currentWorker = 0;

function getNextWorker() {
	if (workers.length < MAX_WORKERS) {
		const worker = new Worker('./worker.js');
		workers.push(worker);
	}
	const worker = workers[currentWorker];
	currentWorker = (currentWorker + 1) % MAX_WORKERS;
	return worker;
}

createServer(async (req, res) => {
	if (req.method !== 'POST') {
		res.writeHead(405);
		return res.end('Method Not Allowed');
	}

	let body = '';
	req.on('data', chunk => {
		body += chunk;
	});
	req.on('end', async () => {
		try {
			const json = JSON.parse(body);
			const { function: functionString, arguments: argsInput } = json;

			const worker = getNextWorker();

			const result = await new Promise((resolve, reject) => {
				const handleMessage = ({ result, error }) => {
					worker.off('message', handleMessage);
					worker.off('error', reject);
					if (error) return reject(new Error(error));
					resolve(result);
				};

				worker.on('message', handleMessage);
				worker.on('error', reject);
				worker.postMessage({ funcString: functionString, funcArgs: argsInput });
			});

			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ result }));
		} catch (err) {
			console.error(err);
			res.writeHead(500);
			res.end(`Error: ${err.message}`);
		}
	});
}).listen(8000, () => console.log('Server started on port 8000'));
