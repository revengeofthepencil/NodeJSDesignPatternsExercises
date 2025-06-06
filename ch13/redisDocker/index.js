/* eslint-disable no-restricted-syntax */
import { createServer } from 'http';

import staticHandler from 'serve-handler';
import * as ws from 'ws';
import Redis from 'ioredis';

const redisSub = new Redis('redis://redis-pubsub:6379');
const redisPub = new Redis('redis://redis-pubsub:6379');

/*
note: I kicked this off with a local Redis server running on the default port 6379.
You can install with Docker (I'm using 8.0.0) by running
docker run -d --name redis -p 6379:6379 redis:8.0.0
*/

// serve static files
const server = createServer((req, res) => // (1)
	staticHandler(req, res, { public: 'www' })
);
const wss = new ws.WebSocketServer({ server });

wss.on('connection', client => {
	console.log('Client connected');
	client.on('message', msg => { // (3)
		console.log(`Message: ${msg}`);
		redisPub.publish('chat_messages', msg);
	});
});

redisSub.subscribe('chat_messages');
redisSub.on('message', (channel, msg) => {
	console.log(`Received message from Redis channel ${channel}: ${msg}`);
	for (const client of wss.clients) {
		if (client.readyState === ws.OPEN) {
			client.send(msg);
		}
	}
});

server.listen(process.argv[2] || 8080);
