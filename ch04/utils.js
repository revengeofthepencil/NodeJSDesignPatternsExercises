import path from 'path';
import { URL } from 'url';

import slug from 'slug';

// eslint-disable-next-line import/prefer-default-export
export function urlToFilename(url) {
	const parsedUrl = new URL(url);
	const urlPath = parsedUrl.pathname.split('/')
		.filter(component => component !== '')
		.map(component => slug(component, { remove: null }))
		.join('/');
	let filename = path.join(parsedUrl.hostname, urlPath);
	if (!path.extname(filename).match(/htm/)) {
		filename += '.html';
	}

	return filename;
}
