import fs from 'fs';
import path from 'path';

/*
4.3 Recursive find: Write recursiveFind(), a callback-style
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

function recursiveFind(dir, keyword, cb) {
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

	let completed = 0;

	const updateCompletedStatus = () => {
		completed += 1;
		if (completed === filesInDir.length) {
			finish();
		}
	};

	return filesInDir.forEach(filePath => {
		const fullFile = path.resolve(dir, filePath);
		return fs.stat(fullFile, (errStat, stat) => {
			if (errStat) {
				return cb(errStat);
			}

			if (stat && stat.isDirectory()) {
				const callbackForSubDir = (subdirErr, subdirRes) => {
					if (subdirErr) {
						cb(subdirErr);
					} else if (subdirRes && subdirRes.length > 0) {
						filesWithKeyword.push(...subdirRes);
					}
					updateCompletedStatus();
				};

				return recursiveFind(fullFile, keyword, callbackForSubDir);
			}

			return fs.readFile(fullFile, (errRead, data) => {
				if (errRead) {
					return cb(errRead);
				}

				const hasText = data.includes(keyword);
				if (hasText) {
					filesWithKeyword.push(fullFile);
				}

				updateCompletedStatus();
				return hasText;
			});
		});
	});
}

console.log('process.argv = ', process.argv);
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
} else {
	console.error('you must provide a directory and a keyword');
}
