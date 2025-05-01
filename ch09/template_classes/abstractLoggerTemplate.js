/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
export class AbstractLoggerTemplate {
	warn(message) {
		throw new Error('this is an abstract thing');
	}

	log(message) {
		throw new Error('this is an abstract thing');
	}

	error(message) {
		throw new Error('this is an abstract thing');
	}
}
