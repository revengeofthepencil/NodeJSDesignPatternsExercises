/* eslint-disable import/extensions */
import { urlToFilename } from '../utils.js';

import { spider } from './secondSpider.js';

const url = 'http://www.example.com';

const fileName = urlToFilename(url);
console.log(`url = ${url}, filename = ${fileName}`);

spider(url, (err, filename, downloaded) => {
	if (err) {
		console.log(err);
	} else if (downloaded) {
		console.log(`Downloaded the file ${filename}`);
	} else {
		console.log(`File ${filename} already exists`);
	}
});
