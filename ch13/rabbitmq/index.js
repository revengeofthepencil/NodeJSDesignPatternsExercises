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
	const { queue } = await channel.assertQueue(`chat_srv_${httpPort}`, { exclusive: true });
	await channel.bindQueue(queue, 'chat');

	const server = createServer((req, res) => staticHandler(req, res, { public: 'www' }));
	const wss = new ws.WebSocketServer({ server });

	function broadcast(msg) {
		// eslint-disable-next-line no-restricted-syntax
		for (const client of wss.clients) {
			if (client.readyState === ws.WebSocket.OPEN) {
				client.send(msg);
			}
		}
	}

	channel.consume(queue, msg => {
		const msgContent = msg.content.toString();
		broadcast(msgContent);
	}, { noAck: true });

	wss.on('connection', client => {
		client.on('message', msg => {
			channel.publish('chat', '', Buffer.from(msg));
		});

		superagent
			.get('http://localhost:8090')
			.on('error', err => console.error(err))
			.pipe(JSONStream.parse('*'))
			.on('data', msg => {
				if (msg.content) client.send(msg.content);
			});
	});

	server.listen(httpPort);
}

main().catch(console.error);
