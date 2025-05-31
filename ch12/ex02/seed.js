/* eslint-disable no-await-in-loop */
import { MongoClient } from 'mongodb';
import { faker } from '@faker-js/faker';

import { getTargetKeyFromLetter, MONGO_AD_URL, MONGO_EP_URL, MONGO_QZ_URL } from './dbConstants.js';

const FAKE_PEOPLE_COUNT = 100000;
const BATCH_SIZE = 1000;

async function seed() {
	// Connect to each database
	const clientAD = new MongoClient(MONGO_AD_URL);
	const clientEP = new MongoClient(MONGO_EP_URL);
	const clientQZ = new MongoClient(MONGO_QZ_URL);

	try {
		await Promise.all([clientAD.connect(), clientEP.connect(), clientQZ.connect()]);

		const dbAD = clientAD.db();
		const dbEP = clientEP.db();
		const dbQZ = clientQZ.db();

		const peopleCollections = {
			AD: dbAD.collection('people'),
			EP: dbEP.collection('people'),
			QZ: dbQZ.collection('people'),
		};

		console.log(`Clearing existing data from ${Object.keys(peopleCollections).length} databases...`);
		await Promise.all(Object.values(peopleCollections)
			.map(collection => collection.deleteMany({})));

		console.log(`Generating ${FAKE_PEOPLE_COUNT} fake people...`);
		for (let i = 0; i < FAKE_PEOPLE_COUNT; i += BATCH_SIZE) {
			const batch = Array.from({ length: BATCH_SIZE }, () => ({
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
			const batchMap = batch.reduce((acc, person) => {
				const firstLetter = person.firstName[0].toUpperCase();
				const targetKey = getTargetKeyFromLetter(firstLetter);

				if (!acc[targetKey]) {
					acc[targetKey] = [];
				}
				acc[targetKey].push(person);
				return acc;
			}, {});

			await Promise.all(
				Object.entries(batchMap).map(([key, docs]) => peopleCollections[key].insertMany(docs))
			);

			console.log(`Inserted ${i + BATCH_SIZE} records...`);
		}

		console.log('Seeding complete');
	} catch (err) {
		console.error('Error seeding database:', err);
	} finally {
		await Promise.all([clientAD.close(), clientEP.close(), clientQZ.close()]);
	}
}

seed();
