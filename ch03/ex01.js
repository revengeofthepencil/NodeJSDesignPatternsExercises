/*
3.1 A simple event: Modify the asynchronous FindRegex class so
that it emits an event when the find process starts, passing the
input files list as an argument. Hint: beware of Zalgo!
*/

import { EventEmitter } from 'events';
import { readFile } from 'fs';

class FindRegex extends EventEmitter {
	constructor(regex) {
		super();
		this.regex = regex;
		this.files = [];
	}

	addFile(file) {
		this.files.push(file);
		return this;
	}

	find() {
		process.nextTick(() => this.emit('matchstart', this.files));

		// eslint-disable-next-line no-restricted-syntax
		for (const file of this.files) {
			readFile(file, 'utf8', (err, content) => {
				if (err) {
					return this.emit('error', err);
				}
				this.emit('fileread', file);
				const match = content.match(this.regex);
				if (match) {
					match.forEach(elem => this.emit('found', file, elem));
				}
				return this;
			});
		}
		return this;
	}
}
const findRegexInstance = new FindRegex(/hello \w+/);
findRegexInstance
	.addFile('exfiles/fileA.txt')
	.addFile('exfiles/fileB.json')
	.find()
	.on('matchstart', files => console.log(`Searching ${files.length} files: ${files.join(', ')}`))
	.on('fileread', file => console.log(`${file} was read`))
	.on('found', (file, match) => console.log(`Matched "${match}" in file ${file}`))
	.on('error', err => console.error(`Error emitted ${err.message}`));
