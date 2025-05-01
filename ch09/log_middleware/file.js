/* eslint-disable import/prefer-default-export */
import fs from 'fs';

import { format } from 'date-fns';

const TMP_PATH = '/tmp';

/* eslint-disable import/prefer-default-export */
export const fileMiddleWare = function () {
	const writeToTmpFile = (message, messageType) => {
		const uppcaseMessageType = messageType ? messageType.toUpperCase() : 'LOG';
		const now = new Date();
		const today = format(now, 'yyyy-MM-dd');
		const rightNow = format(now, 'yyyy-MM-dd:hh:mm:ss');
		const filePath = `${TMP_PATH}/node_exercise_middleware_log_${today}.log`;
		if (!fs.existsSync(filePath)) {
			fs.writeFileSync(filePath, '');
		}

		fs.appendFileSync(filePath, `${rightNow}: ${uppcaseMessageType}: ${message}\n`);
	};

	return {
		process(message, messageType) {
			writeToTmpFile(message, messageType);
			return message;
		},
	};
};
