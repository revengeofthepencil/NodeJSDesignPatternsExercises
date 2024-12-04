import fs from 'fs';
import path from 'path';

import async from 'async';

const TEST_DIR = '/Users/awalker/tester';
const fileNamesTypes = [];
const RATE_LIMIT = 3;
const processFileOrDir = (filePath, callback) => {
	fs.stat(filePath, (errStat, stat) => {
		if (errStat) {
			console.error(`Error stat: ${errStat}`);
			return callback(errStat); // Pass error to callback
		}

		if (stat.isDirectory()) {
			fileNamesTypes.push(`${filePath}: directory`);

			// Read subdirectory and add its contents to the task queue
			return fs.readdir(filePath, (errReadDir, subFiles) => {
				if (errReadDir) {
					console.error(`Error reading dir: ${errReadDir}`);
					return callback(errReadDir);
				}

				// Resolve full paths and add subdirectory contents to the queue
				const subTasks = subFiles.map(subFile =>
					path.resolve(filePath, subFile)
				);

				async.parallelLimit(
					subTasks.map(task => subtaskCallback => processFileOrDir(task, subtaskCallback)),
					RATE_LIMIT,
					callback
				);
			});
		}

		fileNamesTypes.push(`${filePath}: file`);
		return callback();
	});
};

async.parallelLimit(
	[callback => processFileOrDir(TEST_DIR, callback)],
	RATE_LIMIT,
	err => {
		if (err) {
			console.error(`An error occurred: ${err}`);
		} else {
			console.log(`fileNamesTypes = ${JSON.stringify(fileNamesTypes, null, 2)}`);
		}
	}
);
