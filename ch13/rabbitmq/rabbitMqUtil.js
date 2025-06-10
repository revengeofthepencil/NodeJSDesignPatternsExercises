/* eslint-disable no-await-in-loop */
import amqp from 'amqplib';

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://rabbitmq:5672';

const connectRabbitMQ = async (url = RABBITMQ_URL, retries = 10, delay = 2000) => {
	for (let i = 0; i < retries; i++) {
		try {
			return await amqp.connect(url);
		} catch (err) {
			console.log(`RabbitMQ not ready, retrying in ${delay}ms...`);
			await new Promise(res => setTimeout(res, delay));
		}
	}
	throw new Error('Could not connect to RabbitMQ after retries');
};

export default connectRabbitMQ;
