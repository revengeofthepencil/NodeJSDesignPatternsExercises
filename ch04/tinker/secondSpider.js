/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import fs from 'fs';
import path from 'path';

import superagent from 'superagent';
import mkdirp from 'mkdirp';

import { urlToFilename } from '../utils.js';

function saveFile(filename, contents, cb) {
	mkdirp(path.dirname(filename), err => {
		if (err) {
			return cb(err);
		}
		return fs.writeFile(filename, contents, cb);
	});
}

function download(url, filename, cb) {
	console.log(`Downloading ${url}`);
	superagent.get(url).end((err, res) => {
		if (err) {
			return cb(err);
		}
		return saveFile(filename, res.text, saveErr => {
			if (saveErr) {
				return cb(saveErr);
			}
			console.log(`Downloaded and saved: ${url}`);
			return cb(null, res.text);
		});
	});
}

export function spider(url, cb) {
	const filename = urlToFilename(url);
	fs.access(filename, err => {
		if (!err || err.code !== 'ENOENT') { // (1)
			return cb(null, filename, false);
		}
		return download(url, filename, downloadErr => {
			if (downloadErr) {
				return cb(downloadErr);
			}
			return cb(null, filename, true);
		});
	});
}
