/* eslint-disable no-restricted-syntax */
import { createServer } from 'http';

import staticHandler from 'serve-handler';
import * as ws from 'ws';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import zmq from 'zeromq';

const argv = yargs(hideBin(process.argv))
	.option('http', { type: 'number', default: 8080 })
	.option('pub', { type: 'number', demandOption: true })
	.option('sub', { type: 'array', demandOption: true })
	.parse();
// serve static files
const server = createServer((req, res) => staticHandler(req, res, { public: 'www' }));
let pubSocket;
async function initializeSockets() {
	pubSocket = new zmq.Publisher(); // (2)
	await pubSocket.bind(`tcp://127.0.0.1:${argv.pub}`);
	const subSocket = new zmq.Subscriber(); // (3)
	const subPorts = [].concat(argv.sub);
	for (const port of subPorts) {
		console.log(`Subscribing to ${port}`);
		subSocket.connect(`tcp://127.0.0.1:${port}`);
	}

	subSocket.subscribe('chat');
	for await (const [msg] of subSocket) { // (4)
		console.log(`Message from another server: ${msg}`);
		broadcast(msg.toString().split(' ')[1]);
	}
}
initializeSockets();

const wss = new ws.WebSocketServer({ server });

function broadcast(msg) {
	for (const client of wss.clients) {
		if (client.readyState === ws.OPEN) {
			client.send(msg);
		}
	}
}
wss.on('connection', client => {
	console.log('Client connected');
	client.on('message', msg => {
		console.log(`Message: ${msg}`);
		broadcast(msg);
		pubSocket.send(`chat ${msg}`); // (5)
	});
});

server.listen(argv.http || 8080);
