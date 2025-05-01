/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/*
Exercise 9.2 Logging with Template: Implement the same logging component we defined in the previous
exercise, but this time using the Template pattern. We would then obtain a ConsoleLogger class to
log to the console or FileLogger class to log to a file. Appreciate the differences between the
Template and the Strategy approaches.
*/

import { ConsoleLogger } from './template_classes/consoleLogger.js';
import { FileLogger } from './template_classes/fileLogger.js';

const loggers = [
	new ConsoleLogger(),
	new FileLogger(),
];

loggers.forEach(logger => {
	logger.log('This is a template log message');
	logger.warn('This is a template warning message');
	logger.error('This is a template error message');
});
