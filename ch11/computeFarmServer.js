import { createServer } from 'http';
// import { Worker } from 'worker_threads';

function isPromise(obj) {
	return !!obj && typeof obj.then === 'function';
}

createServer(async (req, res) => {
	const { method } = req;

	let body = '';

	req.on('data', chunk => {
		body += chunk;
	});

	req.on('end', async () => {
		if (method === 'POST') {
			const json = await JSON.parse(body);
			console.log(`json = ${JSON.stringify(json)}`);
			const { function: functionString, arguments: argsInput } = json;
			try {
				// eslint-disable-next-line no-eval
				const fn = eval(`(${functionString})`);
				const funcRes = fn(argsInput);
				res.setHeader('Content-Type', 'application/json');
				res.writeHead(200);
				if (isPromise(funcRes)) {
					funcRes.then(result => {
						res.end(JSON.stringify({ result }));
					});
				} else {
					res.end(JSON.stringify({ result: funcRes }));
				}
			} catch (error) {
				console.error(error);
				res.end();
			}
		}
	});
}).listen(8000, () => console.log('Server started on port 8000'));
