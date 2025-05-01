/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/*
Exercise 9.1 Logging with Strategy: Implement a logging component
having at least the following methods: debug(), info(), warn(), and error().
The logging component should also accept a strategy that defines where the log
messages are sent. For example, we might have a ConsoleStrategy to send the
messages to the console, or a FileStrategy to save the log messages to a file.
*/

import { consoleStrategy } from './log_strategies/console.js';
import { tmpFileStrategy } from './log_strategies/tmpfile.js';

class Logger {
	constructor(logStrategy) {
		this.logStrategy = logStrategy;
	}

	warn(message) {
		return this.logStrategy.warn(message);
	}

	log(message) {
		return this.logStrategy.log(message);
	}

	error(message) {
		return this.logStrategy.error(message);
	}
}

[consoleStrategy, tmpFileStrategy].forEach(currentStrategy => {
	const logger = new Logger(currentStrategy);
	logger.log('This is a log message. Just letting you know. No big deal.');
	logger.warn("This right here is a warning. Don't do it!");
	logger.error('Something went horribly wrong. Abandon ship!');
});
