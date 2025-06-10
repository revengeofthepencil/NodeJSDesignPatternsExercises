import { createServer } from 'http';

import { MongoClient } from 'mongodb';
import JSONStream from 'JSONStream';

import connectRabbitMQ from './rabbitMqUtil.js';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo-rabbitmq:27017/messages';

async function main() {
	const mongoClient = new MongoClient(MONGO_URL);
	await mongoClient.connect();
	const mongoDB = mongoClient.db();

	const connection = await connectRabbitMQ();
	const channel = await connection.createChannel();
	await channel.assertExchange('chat', 'fanout');
	const { queue } = channel.assertQueue('chat_history');
	await channel.bindQueue(queue, 'chat');

	channel.consume(queue, async msg => {
		const content = msg.content.toString();
		console.log(`Saving message: ${content}`);
		await mongoDB.collection('messages').insertOne({
			content,
		});
		channel.ack(msg);
	});

	createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		const cursor = mongoDB.collection('messages').find();
		cursor.stream().pipe(JSONStream.stringify()).pipe(res);
	}).listen(8090);
}

main().catch(err => console.error(err));
