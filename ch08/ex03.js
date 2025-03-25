/*
8.3 Colored console output: Write a decorator for the console that adds the red(message),
yellow(message), and green(message) methods. These methods will have to behave like
console.log(message) except they will print the message in red, yellow, or green,
respectively. In one of the exercises from the previous chapter, we already pointed you to
some useful packages to to create colored console output. If you want to try something different
this time, have a look at ansi-styles (nodejsdp.link/ansi-styles).
*/

const COLOR_REF = {
	RED: '\x1b[31m',
	YELLOW: '\x1b[33m',
	GREEN: '\x1b[32m',
};

function createColorLogger(logger) {
	return new Proxy(logger, {
		get(target, propKey) {
			const colorRefMapping = COLOR_REF[propKey.toUpperCase()];
			if (colorRefMapping) {
				return function (...args) {
					logger.log(colorRefMapping + args);
				};
			}

			return target[propKey];
		},
	});
}

const colorLogger = createColorLogger(console);
colorLogger.red('this one is red');
colorLogger.green('this one is green');
colorLogger.log('this one has no color');
colorLogger.warn('this one has no color but is a warning');
colorLogger.yellow('this one is yellow');
