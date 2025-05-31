import express from 'express';

function createDBEndpointApp(dbConn) {
	const app = express();

	app.get('/query/:letter', async (req, res) => {
		const { letter } = req.params;
		if (!letter || !/^[A-Za-z]$/.test(letter)) {
			return res.status(400).json({ error: "Invalid 'letter' parameter. Must be a single A-Z or a-z character." });
		}

		const regex = new RegExp(`^${letter}`, 'i');
		const people = dbConn.collection('people');
		const results = await people.find({ firstName: regex })
			.sort({ firstName: 1, lastName: 1 })
			.toArray();
		return res.json({ count: results.length, results });
	});

	return app;
}

export default createDBEndpointApp;
