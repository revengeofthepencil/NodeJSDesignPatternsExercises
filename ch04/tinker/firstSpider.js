/* eslint-disable import/extensions */
import fs from 'fs';
import path from 'path';

import superagent from 'superagent';
import mkdirp from 'mkdirp';

import { urlToFilename } from '../utils.js';

/* eslint-disable import/prefer-default-export */
export function spider(url, cb) {
	const filename = urlToFilename(url);
	fs.access(filename, err => { // (1)
		if (err && err.code === 'ENOENT') {
			console.log(`Downloading ${url} into ${filename}`);
			superagent.get(url).end((urlErr, res) => { // (2)
				if (urlErr) {
					cb(urlErr);
				} else {
					mkdirp(path.dirname(filename), mkdirErr => { // (3)
						if (err) {
							cb(mkdirErr);
						} else {
							fs.writeFile(filename, res.text, writeFileErr => { // (4)
								if (writeFileErr) {
									cb(writeFileErr);
								} else {
									cb(null, filename, true);
								}
							});
						}
					});
				}
			});
		} else {
			cb(null, filename, false);
		}
	});
}
