import { Level } from 'level';
import { nanoid } from 'nanoid';

const salesDb = new Level('example-db', { valueEncoding: 'json' });
const products = ['book', 'game', 'app', 'song', 'movie'];

async function populate() {
	await salesDb.open(); // Ensure DB is open

	for (let i = 0; i < 100000; i++) {
		// eslint-disable-next-line no-await-in-loop
		await salesDb.put(nanoid(), {
			amount: Math.ceil(Math.random() * 100),
			product: products[Math.floor(Math.random() * 5)],
		});
	}

	console.log('DB populated');
}

populate();
