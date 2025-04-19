/* eslint-disable import/prefer-default-export */
export const serializeMiddleWare = function () {
	return {
		process(message) {
			return JSON.stringify(message);
		},
	};
};
