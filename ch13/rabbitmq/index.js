/* eslint-disable no-restricted-syntax */
import { createServer } from 'http';

import staticHandler from 'serve-handler';
import * as ws from 'ws';
import JSONStream from 'JSONStream';
import superagent from 'superagent';

import connectRabbitMQ from './rabbitMqUtil.js';

const httpPort = process.argv[2] || 8080;

async function main() {
	const connection = await connectRabbitMQ();
	const channel = await connection.createChannel();
	await channel.assertExchange('chat', 'fanout');
	const { queue } = await channel.assertQueue(
		`chat_srv_${httpPort}`,
		{ exclusive: true }
	);
	await channel.bindQueue(queue, 'chat');

	// serve static files
	const server = createServer((req, res) => staticHandler(req, res, { public: 'www' }));

	const wss = new ws.WebSocketServer({ server });

	function broadcast(msg) {
		for (const client of wss.clients) {
			if (client.readyState === ws.OPEN) {
				client.send(msg);
			}
		}
	}
	channel.consume(queue, msg => {
		const msgContent = msg.content.toString();
		console.log(`From queue: ${msgContent}`);
		broadcast(msgContent);
	}, { noAck: true });

	wss.on('connection', client => {
		console.log('Client connected');

		client.on('message', msg => {
			console.log(`Message: ${msg}`);
			channel.publish('chat', '', Buffer.from(msg));
		});

		// query the history service
		superagent
			.get('http://localhost:8090')
			.on('error', err => console.error(err))
			.pipe(JSONStream.parse('*'))
			.on('data', msg => client.send(msg));
	});

	server.listen(httpPort);
}

main().catch(err => console.error(err));
