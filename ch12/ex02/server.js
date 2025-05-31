/* eslint-disable import/extensions */
import { MongoClient } from 'mongodb';
import portfinder from 'portfinder';
import consul from 'consul';

import { MONGO_AD_URL, MONGO_EP_URL, MONGO_QZ_URL } from './dbConstants.js';
import createDBEndpointApp from './createDBEndpointApp.js';

import createApp from './index.js';

const DEFAULT_PORT = process.env.PORT || 3003;

const startDBServer = async dbUrl => {
	const mongoConn = await MongoClient.connect(dbUrl);
	const db = mongoConn.db();
	const port = await portfinder.getPortPromise();
	const newServerUrl = `http://localhost:${port}`;

	const app = createDBEndpointApp(db);
	await new Promise((resolve, reject) => {
		app.listen(port, err => {
			if (err) {
				return reject(err);
			}
			console.log(`DB Server running at ${newServerUrl}`);
			return resolve();
		});
	});

	return newServerUrl;
};

async function startServer() {
	try {
		const adServer = await startDBServer(MONGO_AD_URL);
		const epServer = await startDBServer(MONGO_EP_URL);
		const qzServer = await startDBServer(MONGO_QZ_URL);
		const dbServers = {
			AD: adServer,
			EP: epServer,
			QZ: qzServer,
		};
		console.log(`Connected to all MongoDB databases. dbs = ${JSON.stringify(dbServers)}`);

		const app = createApp(dbServers);
		app.listen(DEFAULT_PORT, () => {
			console.log(`Woo dang! Server running at http://localhost:${DEFAULT_PORT}`);
		});
	} catch (err) {
		console.error('Failed to connect to MongoDB:', err);
		process.exit(1);
	}
}

startServer();
