/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
export class AbstractLoggerTemplate {
	_warn(message) {
		throw new Error('this is an abstract thing');
	}

	_log(message) {
		throw new Error('this is an abstract thing');
	}

	_error(message) {
		throw new Error('this is an abstract thing');
	}
}
