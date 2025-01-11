/* eslint-disable import/prefer-default-export */
import { Transform } from 'stream';

export class CrimePerArea extends Transform {
	constructor(options = {}) {
		super({
			...options,
			objectMode: true,
		});
		this.readLineCount = 0;
		this.crimesPerArea = {};
	}

	_transform(record, _, cb) {
		const { borough, major_category: majorCat, minor_category: minorCat, value, year } = record;
		const valueNumeric = Number.parseInt(value, 10);
		this.readLineCount += 1;
		const fullName = `${majorCat}: ${minorCat}`;
		if (this.readLineCount % 100000 === 0) {
			console.log(`readLineCount = ${this.readLineCount}, year = ${year}, borough = ${borough}, majorCat = ${majorCat}, fullName = ${fullName}`);
		}
		if (!Number.isNaN(valueNumeric) && valueNumeric > 0) {
			if (!(this.crimesPerArea[borough])) {
				this.crimesPerArea[borough] = {};
			}

			if (!this.crimesPerArea[borough][fullName]) {
				this.crimesPerArea[borough][fullName] = valueNumeric;
			} else {
				this.crimesPerArea[borough][fullName] += valueNumeric;
			}
		}
		cb();
	}

	_flush(cb) {
		const mostCommonCrimes = {};
		Object.entries(this.crimesPerArea).forEach(([borough, countsByCat]) => {
			let highCount = 0;
			let mostCommonCat = null;
			let totalPerArea = 0;
			Object.entries(countsByCat).forEach(([currentCat, currentCount]) => {
				totalPerArea += currentCount;
				if (currentCount > highCount) {
					mostCommonCat = currentCat;
					highCount = currentCount;
				}
			});
			mostCommonCrimes[borough] = {
				total: totalPerArea,
				mostCommon: `${mostCommonCat} (${highCount})`,
			};
		});

		this.push(mostCommonCrimes);
		cb();
	}
}
