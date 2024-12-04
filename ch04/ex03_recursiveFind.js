import fs from 'fs';
import path from 'path';
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

function recursiveFind(dir, keyword, cb) {
	const filesWithKeyword = [];

	function finish() {
		console.log(`finished with ${filesWithKeyword.length} files in ${dir} matching ${keyword}`);
		cb(null, filesWithKeyword);
	}

	const filesInDir = fs.readdirSync(dir);
	if (filesInDir.length === 0) {
		return cb();
	}

	let completedCount = 0;

	const updateCompletedCount = () => {
		completedCount += 1;
		if (completedCount === filesInDir.length) {
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
					updateCompletedCount();
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

				updateCompletedCount();
				return hasText;
			});
		});
	});
}

const directoryPath = process.argv.length > 2 ? process.argv[2] : TEST_DIR;
const keyword = process.argv.length > 3 ? process.argv[3] : TEST_STRING;
const cb = (err, res) => {
	console.log('in the callback');
	if (err) {
		console.error('Yikes! Error! ', err);
	} else {
		console.log(`Oh yeah! for keyword '${keyword}', got ${res.length} matches: ${JSON.stringify(res)}`);
	}
};
recursiveFind(directoryPath, keyword, cb);
