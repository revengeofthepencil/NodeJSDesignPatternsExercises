import fs from 'fs';

/*
4.1 File concatenation: Write the implementation of concatFiles(),
a callback-style function that takes two or more paths to text files
in the filesystem and a destination file
*/
const concatFiles = (files, dest, cb) => {
	function readFileAtIndex(index) {
		if (index === files.length) {
			const res = `read ${files.length} filesto ${dest}`;
			return cb(null, res);
		}
		const srcPath = files[index];
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
};

const SRC_PATHS = [
	'exfiles/file1.txt', 'exfiles/file2.txt', 'exfiles/file3.txt',
];

const OUTPUT_FILE = `/tmp/ex01output_${new Date().getTime()}.txt`;

const callback = (err, res) => {
	if (err) {
		console.error('Whoa! got an error! ', err);
	} else {
		console.log(res);
	}
};
concatFiles(SRC_PATHS, OUTPUT_FILE, callback);
