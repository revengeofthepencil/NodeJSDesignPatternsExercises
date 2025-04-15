/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

import fs from 'fs';

import { format } from 'date-fns';

import { AbstractLoggerTemplate } from './abstractLoggerTemplate.js';

const TMP_PATH = '/tmp';
export class FileLogger extends AbstractLoggerTemplate {
	constructor() {
		super();
		const today = format(new Date(), 'yyyy-MM-dd');
		this.filePath = `${TMP_PATH}/node_template_log_${today}.log`;
		if (!fs.existsSync(this.filePath)) {
			fs.writeFileSync(this.filePath, '');
		}
	}

	writeToTmpFile(message) {
		const rightNow = format(new Date(), 'yyyy-MM-dd:hh:mm:ss');
		fs.appendFileSync(this.filePath, `${rightNow}: ${message}\n`);
	}

	_error(message) {
		this.writeToTmpFile(`ERROR: ${message}`);
	}

	_log(message) {
		this.writeToTmpFile(`INFO: ${message}`);
	}

	_warn(message) {
		this.writeToTmpFile(`WARN: ${message}`);
	}
}
