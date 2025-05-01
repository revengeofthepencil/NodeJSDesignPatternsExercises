/* eslint-disable import/prefer-default-export */
export const consoleStrategy = {
	warn: message => console.warn(message),
	log: message => console.log(message),
	error: message => console.error(message),
};
