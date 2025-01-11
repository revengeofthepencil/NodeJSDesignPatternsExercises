/* eslint-disable import/extensions */
/*
6.2 Stream data processing: On Kaggle, you can find a lot of interesting data sets, such as the
London Crime Data (nodejsdp.link/london-crime). You can download the data in CSV format and build
a stream processing script that analyzes the data and tries to answer the following questions:
x Did the number of crimes go up or down over the years?
x What are the most dangerous areas of London?
x What is the most common crime per area?
- What is the least common crime?

Hint: You can use a combination of Transform streams and PassThrough streams to parse and
observe the data as it is flowing. Then, you can build in-memory aggregations for the data,
which can help you answer the preceding questions. Also, you don't need to do everything in
one pipeline; you could build very specialized pipelines (for example, one per question) and
use the fork pattern to distribute the parsed data across them.
*/
import { createReadStream } from 'fs';
import { pipeline, Transform, PassThrough } from 'stream';

import { parse } from 'csv-parse';

import { CrimePerArea } from './crimePerArea.js';
import { CrimePerYear } from './crimePerYear.js';
import { CountPerCrimCategory } from './countPerCrimeCat.js';

const CSV_PATH = '/Users/awalker/tester/london_crime_by_lsoa.csv';

const objectToString = new Transform({
	objectMode: true,
	transform(chunk, _, callback) {
		const jsonString = JSON.stringify(chunk, null, 2);
		console.log(jsonString);
		callback(null, `${jsonString}\n`);
	},
});

const answerCrimeQuestions = () => {
	const crimePerAreaAggregator = new CrimePerArea();
	const crimePerYearAggregator = new CrimePerYear();
	const countPerCatAggregator = new CountPerCrimCategory();
	// PassThrough to fork the data stream
	const passThrough = new PassThrough({ objectMode: true });
	pipeline(
		createReadStream(CSV_PATH),
		parse({ columns: true }),
		// fork that thing!
		passThrough,
		err => err && console.error('Pipeline failed:', err)
	);

	[crimePerYearAggregator, crimePerAreaAggregator, countPerCatAggregator].forEach(crimeAgg => {
		pipeline(
			passThrough,
			crimeAgg,
			objectToString,
			err => {
				if (err) {
					console.error('Uh oh. Pipeline failed:', err);
				} else {
					console.log('Woo hoo! Pipeline succeeded');
				}
			}
		);
	});
};

answerCrimeQuestions();
