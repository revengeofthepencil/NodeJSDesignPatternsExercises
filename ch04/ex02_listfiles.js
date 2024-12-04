import fs from 'fs';
import path from 'path';

/*
4.2 List files recursively: Write listNestedFiles(), a callback-style function that takes,
as the input, the path to a directory in the local filesystem and that asynchronously iterates
over all the subdirectories to eventually return a list of all the files discovered.
Here is what the signature of the function should look like:
function listNestedFiles (dir, cb) { ... }
Bonus points if you manage to avoid callback hell. Feel free to create additional
helper functions if needed.
*/

const TEST_DIR = '/tmp';

function listNestedFiles(dir, cb) {
	const fullFileArray = [];

	const finish = () => {
		console.log(`finished with ${fullFileArray.length} files in ${dir}`);
		cb(null, fullFileArray);
	};

	const filesInDir = fs.readdirSync(dir);
	if (filesInDir.length === 0) {
		return cb();
	}

	const iterate = index => {
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
	};
	return iterate(0);
}

const listFileCallback = (err, finalList) => {
	console.log(`final callback! finalList = ${JSON.stringify(finalList)}`);
	if (err) {
		console.error(`error reading files: ${err}`);
	}
	if (finalList && finalList.length > 0) {
		finalList.forEach(filePath => console.log(filePath));
	}
};

const dirPath = process.argv.length > 2 ? process.argv[2] : TEST_DIR;
listNestedFiles(dirPath, listFileCallback);
