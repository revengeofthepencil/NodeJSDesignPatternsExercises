/* eslint-disable no-await-in-loop */
const { MongoClient } = require('mongodb');
const { faker } = require('@faker-js/faker');

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27018/zIndexDB';

async function seed() {
	const client = new MongoClient(mongoUrl);
	try {
		await client.connect();
		const db = client.db();
		const people = db.collection('people');

		const existingCount = await people.countDocuments();
		if (existingCount > 0) {
			console.log('Database already seeded. Skipping.');
			return;
		}
		console.log('Clearing existing data...');
		await people.deleteMany({});

		console.log('Generating 100,000 fake people...');
		const batchSize = 1000;
		for (let i = 0; i < 100000; i += batchSize) {
			const batch = Array.from({ length: batchSize }, () => ({
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				email: faker.internet.email(),
				phone: faker.phone.number(),
				address: {
					street: faker.location.streetAddress(),
					city: faker.location.city(),
					country: faker.location.country(),
				},
			}));
			await people.insertMany(batch);
			console.log(`Inserted ${i + batchSize} records...`);
		}

		console.log('Seeding complete');
	} catch (err) {
		console.error('Error seeding database:', err);
	} finally {
		await client.close();
	}
}

seed();
