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
			});
		}
		return this;
	}
}

const findRegexInstance = new FindRegex(/hello \w+/);
findRegexInstance
	.addFile('exfiles/fileA.txt')
	.addFile('exfiles/fileB.json')
	.addFile('exfiles/file_does_not_exist.json')
	.find()
	.on('matchstart', files => console.log(`Searching ${files.length} files`))
	.on('fileread', file => console.log(`${file} was read`))
	.on('found', (file, match) => console.log(`Matched "${match}" in ${file}`))
	.on('error', err => console.log(`Error emitted ${err.message}`));
