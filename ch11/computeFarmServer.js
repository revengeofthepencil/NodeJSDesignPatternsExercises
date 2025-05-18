import { createServer } from 'http';

const addNumbers = nums => {
	let total = 0;
	nums.forEach(num => { total += num; });
	return total;
};

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
				const fn = eval(`(${functionString})`);
				const result = fn(argsInput);
				res.setHeader('Content-Type', 'application/json');
				res.writeHead(200);
				res.end(JSON.stringify({ result }));
			} catch (error) {
				console.error(error);
				res.end();
			}
		}
	});
}).listen(8000, () => console.log('Server started on port 8000'));
