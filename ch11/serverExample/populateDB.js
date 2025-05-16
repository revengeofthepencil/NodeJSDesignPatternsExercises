/* eslint-disable no-restricted-syntax */
import { Level } from 'level';
import { nanoid } from 'nanoid';

const salesDb = new Level('example-db', { valueEncoding: 'json' });
const products = ['book', 'game', 'app', 'song', 'movie'];

async function countRecords() {
	const keys = [];
	for await (const key of salesDb.keys()) {
		keys.push(key);
	}
	console.log(`Total records in DB: ${keys.length}`);
	await salesDb.close();
}
async function populate() {
	await salesDb.open(); // Ensure DB is open
	await salesDb.clear(); // Clear existing records
	for (let i = 0; i < 100000; i++) {
		// eslint-disable-next-line no-await-in-loop
		await salesDb.put(nanoid(), {
			amount: Math.ceil(Math.random() * 100),
			product: products[Math.floor(Math.random() * 5)],
		});
	}

	await countRecords(); // Call the countRecords function after populating
	console.log('DB populated');
}

populate();
