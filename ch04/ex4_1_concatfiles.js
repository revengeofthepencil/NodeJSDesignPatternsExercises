import fs from 'fs';

/*
4.1 File concatenation: Write the implementation of concatFiles(),
a callback-style function that takes two or more paths to text files
in the filesystem and a destination file:
*/
function concatFiles(srcFiles, dest, cb) {
	function readFileAtIndex(index) {
		if (index === srcFiles.length) {
			const res = `read ${srcFiles.length} filesto ${dest}`;
			return cb(null, res);
		}
		const srcPath = srcFiles[index];
		return fs.readFile(srcPath, (err, data) => {
			if (err) {
				return cb(err);
			}

			return fs.appendFile(dest, data, appendErr => {
				if (appendErr) {
					return cb(appendErr);
				}

				return readFileAtIndex(index + 1);
			});
		});
	}

	readFileAtIndex(0);
}

if (process.argv.length > 3) {
	let destPath;
	const srcPaths = [];
	for (let i = 2; i < process.argv.length; i++) {
		const path = process.argv[i];
		if (i === process.argv.length - 1) {
			destPath = path;
		} else {
			srcPaths.push(path);
		}
	}

	const callback = (err, res) => {
		if (err) {
			console.error('Whoa! got an error! ', err);
		} else {
			console.log(res);
		}
	};
	concatFiles(srcPaths, destPath, callback);
}
