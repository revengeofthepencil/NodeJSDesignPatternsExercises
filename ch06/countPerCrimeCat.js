/* eslint-disable import/prefer-default-export */
import { Transform } from 'stream';

export class CountPerCrimCategory extends Transform {
	constructor(options = {}) {
		super({
			...options,
			objectMode: true,
		});
		this.readLineCount = 0;
		this.crimesPerCategory = {};
	}

	_transform(record, _, cb) {
		const { major_category: majorCat, value } = record;
		const valueNumeric = Number.parseInt(value, 10);
		this.readLineCount += 1;
		if (this.readLineCount % 100000 === 0) {
			console.log(`readLineCount in CountPerCrimCategory = ${this.readLineCount}, majorCat = ${majorCat}`);
		}
		if (!Number.isNaN(valueNumeric) && valueNumeric > 0) {
			if (!this.crimesPerCategory[majorCat]) {
				this.crimesPerCategory[majorCat] = valueNumeric;
			} else {
				this.crimesPerCategory[majorCat] += valueNumeric;
			}
		}
		cb();
	}

	_flush(cb) {
		// sort in ascending order by value
		const sortedCrimes = Object.entries(this.crimesPerCategory)
			.sort(([, val1], [, val2]) => val1 - val2);
		this.push(Object.fromEntries(sortedCrimes));
		cb();
	}
}
