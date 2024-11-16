import { EventEmitter } from 'events';

/*
3.4 Playing with errors: Modify the function created in exercise 3.3
so that it produces an error if the timestamp at the moment of a tick
(including the initial one that we added as part of exercise 3.3)
is divisible by 5. Propagate the error using both the callback and the
event emitter. Hint: use Date.now() to get the timestamp and the
remainder (%) operator to check whether the timestamp is divisible by 5.
*/

const NUM_MS = 300;

const tickThatThing = (numberMS, callback) => {
	const MS_PER_TICK = 50;
	let totalMS = 0;
	let totalTicks = 0;
	const emitter = new EventEmitter();

	const tickWithTimestampError = numMS => {
		const now = Date.now();
		const divisibleBy5 = now % 5 === 0;
		if (divisibleBy5) {
			const error = { message: `${now} is divisible by 5` };
			emitter.emit('error', error);
			callback(error, null);
		} else {
			emitter.emit('tick', numMS);
		}
	};

	setImmediate(() => {
		tickWithTimestampError(0);
	});

	const doTheTick = () => {
		totalMS += MS_PER_TICK;
		totalTicks += 1;
		tickWithTimestampError(totalMS);
		if (totalMS < numberMS) {
			setTimeout(() => {
				doTheTick();
			}, MS_PER_TICK);
		} else {
			callback(null, totalTicks);
		}
	};

	setTimeout(() => {
		doTheTick();
	}, MS_PER_TICK);
	return emitter;
};

const tickCallback = (error, totalCount) => {
	if (error) {
		console.log(`error!: ${error.message} `);
	} else {
		console.log(`total tick count = ${totalCount}`);
	}
};
tickThatThing(NUM_MS, tickCallback)
	.on('tick', numMs => {
		console.log(`ticked at ${numMs}`);
	})
	.on('error', err => {
		console.warn(`Dang. Got an error ${err.message}`);
	});
