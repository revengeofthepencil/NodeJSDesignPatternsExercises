import { EventEmitter } from 'events';
/*
Write a function that accepts a number and a callback as the arguments.
The function will return an EventEmitter that emits an event called tick
every 50 milliseconds until the number of milliseconds is passed from
the invocation of the function. The function will also call
the callback when the number of milliseconds has passed, providing,
as the result, the total count of tick events emitted. Hint: you
can use setTimeout() to schedule another setTimeout() recursively.
*/

const INTERVAL_MS = 50;


const ticker = (maxMs, callback) => {
	const eventEmitter = new EventEmitter()
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
