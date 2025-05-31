import express from 'express';

import { getTargetKeyFromLetter } from './dbConstants.js';

/* globals fetch */
function createApp(dbMap) {
	const app = express();

	app.get('/', (req, res) => {
		res.json({ message: 'Can you dig it?' });
	});

	app.get('/api/people/byFirstName/:letter', async (req, res) => {
		const { letter } = req.params;

		// Check if letter is missing or not a single A-Z or a-z character
		if (!letter || !/^[A-Za-z]$/.test(letter)) {
			return res.status(400).json({ error: "Invalid 'letter' parameter. Must be a single A-Z or a-z character." });
		}

		const targetKey = getTargetKeyFromLetter(letter);
		const endpoint = dbMap[targetKey];

		if (!endpoint) {
			return res.status(502).json({ error: `No endpoint found for key '${targetKey}'` });
		}
		try {
			// Pass the request to the endpoint (you can append query params if needed)
			const response = await fetch(`${endpoint}/query/${letter}`);
			// console.log(`DEBUG: response from ${endpoint} = ${JSON.stringify(response)}`);

			if (!response.ok) {
				const text = await response.text();
				return res.status(response.status).json({ error: text });
			}

			const data = await response.json();
			return res.json({
				targetKey,
				endpoint,
				...data,
			});
		} catch (err) {
			console.error('Error forwarding request:', err);
			return res.status(500).json({ error: 'Internal server error while forwarding request.' });
		}
	});

	return app;
}

export default createApp;
