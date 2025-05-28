const express = require('express');

function createApp(db) {
	const app = express();

	app.get('/', (req, res) => {
		res.send('Hello from Node 20 + MongoDB 8 + Docker!');
	});

	app.get('/items', async (req, res) => {
		try {
			const items = await db.collection('items').find().toArray();
			res.json(items);
		} catch (err) {
			console.error('Error fetching items:', err);
			res.status(500).send('Error fetching items');
		}
	});

	return app;
}

module.exports = createApp;
