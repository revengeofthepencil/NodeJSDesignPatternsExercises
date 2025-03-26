/* eslint-disable no-param-reassign */
/*
8.4 Virtual filesystem: Modify our LevelDB filesystem adapter example to write
the file data in memory rather than in LevelDB. You can use an object or a Map
instance to store the key-value pairs of filenames and the associated data.
*/

function createFSAdapter(dataStore) {
	return ({
		readFile(filename, options, callback) {
			if (typeof options === 'function') {
				callback = options;
				options = {};
			} else if (typeof options === 'string') {
				options = { encoding: options };
			}
			const fileContents = dataStore[filename];
			if (!fileContents) {
				const err = new Error(`ENOENT, open "${filename}"`);
				err.code = 'ENOENT';
				err.errno = 34;
				err.path = filename;
				return callback && callback(err);
			}

			return callback && callback(null, fileContents);
		},
		writeFile(filename, contents, options, callback) {
			if (typeof options === 'function') {
				callback = options;
				options = {};
			} else if (typeof options === 'string') {
				options = { encoding: options };
			}
			dataStore[filename] = contents;
			callback();
		},
	});
}

const inMemoryStore = {};
const fs = createFSAdapter(inMemoryStore);

fs.writeFile('/tmp/file.txt', 'Hello!', () => {
	fs.readFile('/tmp/file.txt', { encoding: 'utf8' }, (err, res) => {
		if (err) {
			return console.error(err);
		}
		return console.log(res);
	});
});

fs.readFile('nope_not_here.txt', { encoding: 'utf8' }, (err, res) => {
	console.error(err);
});
