/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/*
7.1 Console color factory: Create a class called ColorConsole that has just one empty method
called log(). Then, create three subclasses: RedConsole, BlueConsole, and GreenConsole.
The log() method of every ColorConsole subclass will accept a string as input and will print
that string to the console using the color that gives the name to the class. Then, create a
factory function that takes color as input, such as 'red', and returns the related
ColorConsole subclass. Finally, write a small command-line script to try the new console
color factory. You can use this Stack Overflow answer as a reference for using colors in the
console: nodejsdp.link/console-colors.
*/

const COLOR_REF = {
	RED: '\x1b[31m',
	BLUE: '\x1b[34m',
	GREEN: '\x1b[32m',
};

class ColorConsole {
	log() {}
}

class RedConsole extends ColorConsole {
	log(logString) {
		console.log(COLOR_REF.RED, `Red ${logString}`);
	}
}
class BlueConsole extends ColorConsole {
	log(logString) {
		console.log(COLOR_REF.BLUE, `Blue ${logString}`);
	}
}
class GreenConsole extends ColorConsole {
	log(logString) {
		console.log(COLOR_REF.GREEN, `Green ${logString}`);
	}
}

function createColorLogger(color) {
	if (!color) {
		return null;
	}

	switch (color.toLowerCase().trim()) {
		case 'blue':
			return new BlueConsole();
		case 'red':
			return new RedConsole();
		case 'green':
			return new GreenConsole();
		default:
			return null;
	}
}

if (process.argv.length < 3) {
	console.error('You must provide a word to print and an optional color');
	process.exit(1);
}

const wordToPrint = process.argv[2];
const colorLogger = process.argv.length > 3
	? createColorLogger(process.argv[3])
	: null;

if (colorLogger) {
	colorLogger.log(wordToPrint);
} else {
	console.log(wordToPrint);
}
