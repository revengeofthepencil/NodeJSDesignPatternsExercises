import fs from 'fs';
import path from 'path';

/*
4.2 List files recursively: Write listNestedFiles(), a callback-style
function that takes, as the input, the path to a directory in the local filesystem
and that asynchronously iterates over all the subdirectories to eventually return a
list of all the files discovered.
*/

function listNestedFiles(dir, cb) {
	const fullFileArray = [];

	function finish() {
		const finishMessage = `finished with ${fullFileArray.length} files in ${dir}`;
		console.log(finishMessage);
		cb(null, fullFileArray);
	}

	const filesInDir = fs.readdirSync(dir);
	if (filesInDir.length === 0) {
		return cb();
	}

	function iterate(index) {
		if (index === filesInDir.length) {
			return finish();
		}
		const filePath = filesInDir[index];
		const fullFile = path.resolve(dir, filePath);
		return fs.stat(fullFile, (err, stat) => {
			if (err) {
				return cb(err);
			}

			if (stat && stat.isDirectory()) {
				return listNestedFiles(fullFile, (nestedErr, res) => {
					if (nestedErr) {
						return cb(nestedErr);
					}

					if (res && res.length > 0) {
						fullFileArray.push(...res);
					}
					return iterate(index + 1);
				});
			}

			fullFileArray.push(fullFile);
			return iterate(index + 1);
		});
	}
	return iterate(0);
}

if (process.argv.length > 2) {
	const directoryPath = process.argv[2];
	console.log(`directory = ${directoryPath}`);
	const cb = (err, res) => {
		if (err) {
			console.error('Yikes! Error! ', err);
		} else {
			console.log(`Oh yeah! got ${JSON.stringify(res)}`);
		}
	};
	listNestedFiles(directoryPath, cb);
}
