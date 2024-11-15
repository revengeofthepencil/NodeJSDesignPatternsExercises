/*
3.1 A simple event: Modify the asynchronous FindRegex class so
that it emits an event when the find process starts, passing the
input files list as an argument. Hint: beware of Zalgo!
*/

import { EventEmitter } from 'events';
import { readFile } from 'fs';

function findRegex(files, regex) {
	const emitter = new EventEmitter();
	// eslint-disable-next-line no-restricted-syntax
	for (const file of files) {
		readFile(file, 'utf8', (err, content) => {
			if (err) {
				return emitter.emit('error', err);
			}

			emitter.emit('fileread', file);
			const match = content.match(regex);
			if (match) {
				match.forEach(elem => emitter.emit('found', file, elem));
			}
		});
	}
	return emitter;
}

findRegex(
	['exFiles/fileA.txt', 'exFiles/fileB.json'],
	/hello \w+/g
)
	.on('fileread', file => console.log(`${file} was read`))
	.on('found', (file, match) => console.log(`Matched "${match}" in ${file}`))
	.on('error', err => console.error(`Error emitted ${err.message}`));
