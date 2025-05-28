import express from 'express';

function createApp(dbMap) {
	const app = express();

	app.get('/', (req, res) => {
		res.send('Can you dig it?');
	});

	return app;
}

export default createApp;
