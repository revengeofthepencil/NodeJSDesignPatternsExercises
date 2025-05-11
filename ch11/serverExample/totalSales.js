/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import { Level } from 'level';

const salesDb = new Level('example-db', { valueEncoding: 'json' });

// eslint-disable-next-line import/prefer-default-export
export async function totalSales(product) {
	const now = Date.now();
	let sum = 0;

	// Use the iterator API to scan through the database
	// eslint-disable-next-line no-unused-vars
	for await (const [key, transaction] of salesDb.iterator()) {
		if (!product || transaction.product === product) {
			sum += transaction.amount;
		}
	}

	console.log(`totalSales() took: ${Date.now() - now}ms`);
	return sum;
}
