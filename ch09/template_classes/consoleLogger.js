/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

import { AbstractLoggerTemplate } from './abstractLoggerTemplate.js';

export class ConsoleLogger extends AbstractLoggerTemplate {
	_error(message) {
		console.error(message);
	}

	_log(message) {
		console.log(message);
	}

	_warn(message) {
		console.warn(message);
	}
}
