/* eslint-disable import/prefer-default-export */
import { createServer } from 'http';

import { MongoClient } from 'mongodb';
import JSONStream from 'JSONStream';
import Redis from 'ioredis';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo-redisPubSub:27017/redisPubSub';
const REDIS_URL = process.env.REDIS_URL || 'redis://redis-pubsub:6379';
const redisSub = new Redis(REDIS_URL);

// mongo messages collection
let messages;

let mongoClient;

async function getAllMessages() {
	// Ensure a fresh connection for each call
	const client = new MongoClient(MONGO_URL);
	await client.connect();
	const db = client.db();
	const messagesCollection = db.collection('messages');
	const result = await messagesCollection.find({}).sort({ createdAt: 1 }).toArray();
	await client.close();
	return result;
}

async function initHistorySvc() {
	mongoClient = new MongoClient(MONGO_URL);
	await mongoClient.connect();
	const mongoDB = mongoClient.db();
	messages = mongoDB.collection('messages');
	await messages.createIndex({ createdAt: -1 });
	console.log('Connected to MongoDB');
	await redisSub.subscribe('chat_messages');

	redisSub.on('message', async (channel, msg) => {
		console.log(`Woo hoo! Mongo received message from Redis channel ${channel}: ${msg}`);
		const doc = { message: msg, createdAt: new Date() };
		await messages.insertOne(doc);
	});
}

export { getAllMessages, initHistorySvc };
