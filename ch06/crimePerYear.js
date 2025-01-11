/* eslint-disable import/prefer-default-export */
import { Transform } from 'stream';

export class CrimePerYear extends Transform {
	constructor(options = {}) {
		super({
			...options,
			objectMode: true,
		});
		this.readLineCount = 0;
		this.crimesPerYear = {};
	}

	_transform(record, _, cb) {
		const { value, year } = record;
		const valueNumeric = Number.parseInt(value, 10);
		this.readLineCount += 1;
		if (this.readLineCount % 100000 === 0) {
			console.log(`readLineCount = ${this.readLineCount}, year = ${year}, value ${value}`);
		}
		if (!Number.isNaN(valueNumeric) && valueNumeric > 0) {
			if (!(this.crimesPerYear[year])) {
				this.crimesPerYear[year] = valueNumeric;
			} else {
				this.crimesPerYear[year] += valueNumeric;
			}
		}
		cb();
	}

	_flush(cb) {
		this.push(this.crimesPerYear);
		cb();
	}
}
