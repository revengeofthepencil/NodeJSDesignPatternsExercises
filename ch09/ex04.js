/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
/*
Exercise 9.4 Logging with Middleware: Rewrite the logging component you implemented for exercises
9.1 and 9.2, but this time use the Middleware pattern to postprocess each log message allowing
different middlewares to customize how to handle the messages and how to output them. We could, for
example, add a serialize() middleware to convert the log messages to a string representation ready
to be sent over the wire or saved somewhere. Then, we could add a saveToFile() middleware that
saves each message to a file. This exercise should highlight the flexibility and universality of
the Middleware pattern.
*/

import { consoleMiddleWare } from './log_middleware/console.js';
import { fileMiddleWare } from './log_middleware/file.js';
import { serializeMiddleWare } from './log_middleware/serialize.js';

class LogWithMiddleWar {
	constructor() {
		this.middleware = [];
	}

	use(middleware) {
		this.middleware.push(middleware.process);
	}

	log(message) {
		return this.runMiddleWareChain(message, 'log');
	}

	error(message) {
		return this.runMiddleWareChain(message, 'error');
	}

	warn(message) {
		return this.runMiddleWareChain(message, 'warn');
	}

	async runMiddleWareChain(initialMessage, messageType) {
		let message = initialMessage;
		for await (const middlewareFunc of this.middleware) {
			message = await middlewareFunc(message, messageType);
		}
		return message;
	}
}

const middleWareLogger = new LogWithMiddleWar();
middleWareLogger.use(consoleMiddleWare());
middleWareLogger.use(serializeMiddleWare());
middleWareLogger.use(fileMiddleWare());
middleWareLogger.use(consoleMiddleWare());

middleWareLogger.log('hey!!');

const jsonIsh = { this: 'might be JSON', a_number: 999 };
middleWareLogger.log(jsonIsh);
middleWareLogger.warn(jsonIsh);
middleWareLogger.error(jsonIsh);
