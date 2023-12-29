import { EventEmitter } from 'events';
/*
Modify the function created in exercise 3.3 so that it produces an error
if the timestamp at the moment of a tick (including the initial one that we
added as part of exercise 3.3) is divisible by 5. Propagate the error using
both the callback and the event emitter. Hint: use Date.now() to get
the timestamp and the remainder (%) operator to check whether
the timestamp is divisible by 5.
*/

const INTERVAL_MS = 50;


const ticker = (maxMs, callback) => {
	const eventEmitter = new EventEmitter()
	let countTicks = 0;
	let totalMS = 0;

	const checkErrorTimestamp = () => {
		const now = Date.now();
		const divBy5 = now % 5 === 0;
		if (divBy5) {
			const err = new Error(`you can divide by 5 at ${now}. Tick count = ${countTicks}, total MS = ${totalMS}`);
			eventEmitter.emit('error', err);
			return err;
		} 

		return null;
	};

	setImmediate(() => {
		checkErrorTimestamp();
		eventEmitter.emit('tick', 0);
	  });

	const tickThatThing = () => {
		const timestampErr = checkErrorTimestamp();
		if (totalMS < maxMs) {
			countTicks += 1;
			totalMS += INTERVAL_MS;
			eventEmitter.emit('tick', totalMS);
			setTimeout(tickThatThing, INTERVAL_MS);
		} else {
			if (!timestampErr) {
				callback(null, countTicks);
			} else {
				callback(timestampErr, countTicks);
			}
		}
	};

	setTimeout(tickThatThing, INTERVAL_MS);
	return eventEmitter;
};

const tickerInstance = ticker(501,
	(err, count) => {
		if(err) {
		  console.log('Error! ', err);
		} else {
			console.log(`Called tick ${count} times`);
		}
	  })
	.on('tick', ms => console.log(`Tick ${ms} ms`))
	.on('error', error => console.log(`Whoa! ${error.message}`));
