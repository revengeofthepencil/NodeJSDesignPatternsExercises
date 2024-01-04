import fs from 'fs';
import path from 'path';
import { TaskQueueEx3 } from './TaskQueueEx3.js';

/*
4.3 Recursive find: Write recursiveFindTask(), a callback-style
function that takes a path to a directory in the local
filesystem and a keyword

The function must find all the text files within the given directory
that contain the given keyword in the file contents. The list of matching
files should be returned using the callback when the search is completed.
If no matching file is found, the callback must be invoked with an empty array.

Bonus points if you make the search recursive (it looks for text files
in any subdirectory as well). Extra bonus points if you manage to perform
the search within different files and subdirectories in parallel, but be 
careful to keep the number of parallel tasks under control!
*/

const MAX_CONCURRENT = 4;


function readFileTask (fullFile, keyword, queue, cb) {            
	return fs.readFile(fullFile, (errRead, data) => {
		if (errRead) {
			return cb(errRead);
		};

		const hasText = data.includes(keyword);
		cb(null, {
			fullFile, hasText
		})
		return hasText;
	});
  };


function processFileOrDirTask (
	fullFile,
	keyword,
	callbackForSubDir,
	callbackForFile,
	queue) { 
	return fs.stat(fullFile, (errStat, stat) => {
		if (errStat) {
			return callbackForFile(errStat);
		};

		if (stat && stat.isDirectory()) {
			return recursiveFindTask(fullFile, keyword, queue, callbackForSubDir)
		};

		return readFileTask(fullFile, keyword, queue, callbackForFile)
	});
}

function recursiveFindTask(dir, keyword, cb, queue) {
	const filesWithKeyword = [];
	function finish() {
		const finishMessage = `finished with ${filesWithKeyword.length} files in ${dir} matching ${keyword}`;
		console.log(finishMessage);
		cb(null, filesWithKeyword);
	}

	const filesInDir = fs.readdirSync(dir);
	if (filesInDir.length === 0) {
		return cb();
	}

	let completed = 0

	const updateCompletedStatus = () => {
		completed += 1;
		if (completed === filesInDir.length) {
			finish();
		}
	};

	filesInDir.forEach(filePath => {
		const fullFile = path.resolve(dir, filePath);

		const callbackForFile = (fileErr, fileResp) => {
			if (fileErr) {
				cb(fileErr);
			}

			if (fileResp.hasText === true) {
				filesWithKeyword.push(fullFile);
			}
			updateCompletedStatus();
		};


		const callbackForSubDir = (subdirErr, subdirRes) => {
			if (subdirErr) {
				cb(subdirErr);
			} else {
				if (subdirRes && subdirRes.length > 0) {
					filesWithKeyword.push(...subdirRes);
				}
			}
			updateCompletedStatus();
		};

		return processFileOrDirTask (
			fullFile,
			keyword,
			callbackForSubDir,
			callbackForFile,
			queue)
		  
	});
}

function recursiveFind(dir, keyword, cb) {
	const queue = new TaskQueueEx3(MAX_CONCURRENT);
	recursiveFindTask(dir, keyword, queue, cb);
	queue.on('error', console.error)
	queue.on('empty', () => console.log('Download complete'))
};

if (process.argv.length > 3) {
	const directoryPath = process.argv[2];
	const keyword = process.argv[3];
	console.log(`directoryPath = ${directoryPath}, keyword = ${keyword}`);
	const cb = (err, res) => {
		if (err) {
			console.error('Yikes! Error! ', err);
		} else {
			console.log(`Oh yeah! for keyword '${keyword}', got ${res.length} matches: ${JSON.stringify(res)}`);
		}
	};
	recursiveFind(directoryPath, keyword, cb);
}