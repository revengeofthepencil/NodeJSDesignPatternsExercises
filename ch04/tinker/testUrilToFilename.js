// eslint-disable-next-line import/extensions
import { urlToFilename } from '../utils.js';

const url = 'https://surveys.benaroyaresearch.org/sdb/clinicalcore/index';

const fileName = urlToFilename(url);
console.log(`url = ${url}, filename = ${fileName}`);
