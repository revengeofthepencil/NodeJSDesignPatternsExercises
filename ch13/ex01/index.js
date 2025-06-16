/* eslint-disable no-restricted-syntax */
import { createServer } from 'http';

import staticHandler from 'serve-handler';
import * as ws from 'ws';
import Redis from 'ioredis';

import { getAllMessages } from './historySvcRedis.js';
const port = process.argv[2] || 8080;

const REDIS_URL = process.env.REDIS_URL || 'redis://redis-pubsub:6379';

const redisSub = new Redis(REDIS_URL);
const redisPub = new Redis(REDIS_URL);

// serve static files
const server = createServer((req, res) => // (1)
	staticHandler(req, res, { public: 'www' })
);
const wss = new ws.WebSocketServer({ server });

wss.on('connection', client => {
	console.log(`Client connected on port ${port}`);
	getAllMessages().then(allMessages => { // (2)
		for (const { message, _id } of allMessages) {
			client.send(`${message} (id: ${_id})`); // send each message to the client
		}
	}
	).catch(err => console.error(err));
	client.on('message', msg => { // (3)
		console.log(`Message: ${msg}`);
		redisPub.publish('chat_messages', msg);
	});
});

redisSub.subscribe('chat_messages');
redisSub.on('message', (channel, msg) => {
	console.log(`Woo hoo! Received message from Redis channel ${channel}: ${msg}`);
	for (const client of wss.clients) {
		if (client.readyState === ws.WebSocket.OPEN) {
			client.send(msg);
		}
	}
});

server.listen(process.argv[2] || port);
