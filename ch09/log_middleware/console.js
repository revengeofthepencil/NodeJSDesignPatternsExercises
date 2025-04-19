/* eslint-disable import/prefer-default-export */
export const consoleMiddleWare = function () {
	return {
		process(message, messageType) {
			// console.log('in the console process. messageType = ', messageType);
			if (messageType === 'log') {
				console.log(message);
			} else if (messageType === 'warn') {
				console.warn(message);
			} else if (messageType === 'error') {
				console.error(message);
			}
			return message;
		},
	};
};
