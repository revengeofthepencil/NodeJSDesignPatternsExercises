import { MongoClient } from 'mongodb';
import portfinder from 'portfinder';

import createApp from './index.js';

const DEFAULT_PORT = process.env.PORT || 3003;
const mongoAdUrl = process.env.MONGO_AD_URL || 'mongodb://localhost:27018/zIndexAD';
const mongoEpUrl = process.env.MONGO_EP_URL || 'mongodb://localhost:27019/zIndexEP';
const mongoQzUrl = process.env.MONGO_QZ_URL || 'mongodb://localhost:27020/zIndexQZ';

async function startServer() {
	try {
		const [clientAD, clientEP, clientQZ] = await Promise.all([
			MongoClient.connect(mongoAdUrl),
			MongoClient.connect(mongoEpUrl),
			MongoClient.connect(mongoQzUrl),
		]);
		const dbs = {
			AD: clientAD.db(),
			EP: clientEP.db(),
			QZ: clientQZ.db(),
		};
		console.log('Connected to all MongoDB databases');

		const app = createApp(dbs);
		app.listen(DEFAULT_PORT, () => {
			console.log(`Woo dang! Server running at http://localhost:${DEFAULT_PORT}`);
		});
	} catch (err) {
		console.error('Failed to connect to MongoDB:', err);
		process.exit(1);
	}
}

startServer();
