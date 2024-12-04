/* eslint-disable import/extensions */
import fs from 'fs';
import path from 'path';

import async from 'async';

/*
4.3 Recursive find: Write recursiveFind(), a callback-style function that takes
a path to a directory in the local filesystem and a keyword, as per the following signature:
function recursiveFind(dir, keyword, cb) {  ...  }
The function must find all the text files within the given directory that contain the given
keyword in the file contents. The list of matching files should be returned using the callback
when the search is completed. If no matching file is found, the callback must be invoked with
an empty array. As an example test case, if you have the files foo.txt, bar.txt, and baz.txt
in myDir and the keyword 'batman' is contained in the files
foo.txt and baz.txt, you should be able to run the following code:
recursiveFind('myDir', 'batman', console.log)

Bonus points if you make the search recursive (it looks for text files in any subdirectory
as well). Extra bonus points if you manage to perform the search within different files and
subdirectories in parallel, but be careful to keep the number of parallel tasks under control!
*/

const TEST_DIR = '/tmp';
const TEST_STRING = 'file';

const MAX_CONCURRENT = 4;

function readFileTask(fullFile, keyword, cb) {
	return fs.readFile(fullFile, (errRead, data) => {
		if (errRead) {
			return cb(errRead);
		}

		const hasText = data.includes(keyword);
		cb(null, {
			fullFile, hasText,
		});
		return hasText;
	});
}

function processFileOrDirTask(
	fullFile,
	keyword,
	callbackForSubDir,
	callbackForFile) {
	return fs.stat(fullFile, (errStat, stat) => {
		if (errStat) {
			return callbackForFile(errStat);
		}

		if (stat && stat.isDirectory()) {
			// eslint-disable-next-line no-use-before-define
			return recursiveFind(fullFile, keyword, callbackForSubDir);
		}

		return readFileTask(fullFile, keyword, callbackForFile);
	});
}

function recursiveFind(dir, keyword, cb) {
	const filesWithKeyword = [];
	let pendingTasks = 0; // Tracks active tasks

	function finish() {
		if (pendingTasks === 0) {
			const flattenedArray = filesWithKeyword.flat(Infinity); // Ensure fully flattened
			console.log(`Finished with ${filesWithKeyword.length} files in ${dir} matching '${keyword}'`);
			return cb(null, flattenedArray);
		}
		return null;
	}

	function processFile(filePath) {
		const fullFile = path.resolve(dir, filePath);
		pendingTasks += 1;

		const callbackForFile = (fileErr, fileResp) => {
			pendingTasks -= 1;

			if (fileErr) {
				console.error(`Error reading file ${fullFile}: ${fileErr}`);
			} else if (fileResp && fileResp.hasText) {
				filesWithKeyword.push(fullFile);
			}

			finish();
		};

		const callbackForSubDir = (subdirErr, subdirRes) => {
			pendingTasks -= 1;

			if (subdirErr) {
				console.error(`Error processing subdirectory ${fullFile}: ${subdirErr}`);
			} else if (subdirRes && subdirRes.length > 0) {
				filesWithKeyword.push(...subdirRes);
			}

			finish();
		};

		processFileOrDirTask(
			fullFile,
			keyword,
			callbackForSubDir,
			callbackForFile
		);
	}

	fs.readdir(dir, (err, files) => {
		if (err) {
			return cb(err);
		}

		if (files.length === 0) {
			return finish(); // No files, finish immediately
		}

		return files.forEach(processFile);
	});
}

const directoryPath = process.argv.length > 2 ? process.argv[2] : TEST_DIR;
const keyword = process.argv.length > 3 ? process.argv[3] : TEST_STRING;
const cb = (err, res) => {
	console.log('in the callback');
	if (err) {
		console.error('Yikes! Error! ', err);
	} else if (res && res[0]) {
		const firstRes = res[0];
		console.log(`Oh yeah! for keyword '${keyword}', got ${firstRes.length} matches: ${JSON.stringify(firstRes)}`);
	}
};

async.parallelLimit(
	[callback => recursiveFind(directoryPath, keyword, callback)],
	MAX_CONCURRENT,
	cb
);
