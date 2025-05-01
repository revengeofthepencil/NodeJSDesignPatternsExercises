/* eslint-disable import/prefer-default-export */
import fs from 'fs';

import { format } from 'date-fns';

const TMP_PATH = '/tmp';

const writeToTmpFile = message => {
	const now = new Date();
	const today = format(now, 'yyyy-MM-dd');
	const rightNow = format(now, 'yyyy-MM-dd:hh:mm:ss');
	const filePath = `${TMP_PATH}/node_exercise_log_${today}.log`;
	if (!fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, '');
	}

	fs.appendFileSync(filePath, `${rightNow}: ${message}\n`);
};

export const tmpFileStrategy = {
	warn: message => writeToTmpFile(`WARN: ${message}`),
	log: message => writeToTmpFile(`INFO: ${message}`),
	error: message => writeToTmpFile(`ERROR: ${message}`),
};
