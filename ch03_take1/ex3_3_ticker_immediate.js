import { EventEmitter } from 'events';
/*
Modify the function created in exercise 3.2 so that it emits a
tick event immediately after the function is invoked.
*/

const INTERVAL_MS = 50;


const ticker = (maxMs, callback) => {
	const eventEmitter = new EventEmitter()

	setImmediate(() => {
		eventEmitter.emit('tick', 0);
	  });
	  
	let countTicks = 0;
	let totalMS = 0;

	const tickThatThing = () => {
		if (totalMS < maxMs) {
			countTicks += 1;
			totalMS += INTERVAL_MS;
			eventEmitter.emit('tick', totalMS);
			setTimeout(tickThatThing, INTERVAL_MS);
		} else {
			callback(countTicks);
		}
	};

	setTimeout(tickThatThing, INTERVAL_MS);
	return eventEmitter;
};

const tickerInstance = ticker(501,
	count => console.log(`Called tick ${count} times`))
	.on('tick', ms => console.log(`Tick ${ms} ms`));
