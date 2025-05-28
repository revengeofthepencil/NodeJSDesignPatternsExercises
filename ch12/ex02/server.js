const { MongoClient } = require('mongodb');

const createApp = require('./index');

const DEFAULT_PORT = process.env.PORT || 3003;
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/zIndexDB';

async function startServer() {
	try {
		const client = await MongoClient.connect(mongoUrl);
		const db = client.db();
		console.log('Connected to MongoDB');

		const app = createApp(db);
		app.listen(DEFAULT_PORT, () => {
			console.log(`Woo dang! Server running at http://localhost:${DEFAULT_PORT}`);
		});
	} catch (err) {
		console.error('Failed to connect to MongoDB:', err);
		process.exit(1);
	}
}

startServer();
