/* eslint-disable no-restricted-syntax */
import { createServer } from 'http';

import staticHandler from 'serve-handler';
import * as ws from 'ws';

const port = process.argv[2] || 8080;

// serve static files
const server = createServer((req, res) =>
	staticHandler(req, res, { public: 'www' })
);

const wss = new ws.WebSocketServer({ server });

function broadcast(msg) {
	console.log(`Broadcasting message: ${msg}. wss.clients = ${wss.clients.size}`);
	for (const client of wss.clients) {
		if (client.readyState === ws.WebSocket.OPEN) {
			client.send(String(msg));
		}
	}
}

wss.on('connection', client => {
	console.log(`Client connected on port ${port}`);
	client.on('message', msg => {
		console.log(`Message: ${msg}`);
		broadcast(msg);
	});
});
server.listen(port);
