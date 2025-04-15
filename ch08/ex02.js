/*
8.2 Timestamped logs: Create a proxy for the console object
that enhances every logging function (log(), error(), debug(),
and info()) by prepending the current timestamp to the message
you want to print in the logs. For instance, executing consoleProxy.log('hello')
should print something like 2020-02-18T15:59:30.699Z hello in the console.
*/
import { format } from 'date-fns';

const getTimeFormat = date => format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS");

function createTimestampLogger(logger) {
	return new Proxy(logger, {
		get(target, propKey) {
			return function (...args) {
				target[propKey](`${getTimeFormat(new Date())} ${args}`);
			};
		},
	});
}

const logger = createTimestampLogger(console);
logger.debug('Just debugging');
logger.log('This is a log message');
logger.error('This is an error');
logger.warn('This is a warning');
