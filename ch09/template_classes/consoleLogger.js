/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

import { AbstractLoggerTemplate } from './abstractLoggerTemplate.js';

export class ConsoleLogger extends AbstractLoggerTemplate {
	error(message) {
		console.error(message);
	}

	log(message) {
		console.log(message);
	}

	warn(message) {
		console.warn(message);
	}
}
