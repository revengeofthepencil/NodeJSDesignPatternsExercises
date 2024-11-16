import { EventEmitter } from 'events';

/*
3.2 Ticker: Write a function that accepts a number and a
callback as the arguments. The function will return an
EventEmitter that emits an event called tick every 50 milliseconds
until the number of milliseconds is passed from the invocation
of the function. The function will also call the callback when
the number of milliseconds has passed, providing, as the result,
the total count of tick events emitted.
Hint: you can use setTimeout() to schedule another setTimeout() recursively.
*/
const NUM_MS = 300;

const tickThatThing = (numberMS, callback) => {
	const MS_PER_TICK = 50;
	let totalMS = 0;
	let totalTicks = 0;
	const emitter = new EventEmitter();

	const doTheTick = () => {
		totalMS += MS_PER_TICK;
		totalTicks += 1;
		emitter.emit('tick', totalMS);
		if (totalMS < numberMS) {
			setTimeout(() => {
				doTheTick();
			}, MS_PER_TICK);
		} else {
			callback(totalTicks);
		}
	};

	setTimeout(() => {
		doTheTick();
	}, MS_PER_TICK);
	return emitter;
};

const tickCallback = totalCount => {
	console.log(`total tick count = ${totalCount}`);
};
tickThatThing(NUM_MS, tickCallback).on('tick', numMs => {
	console.log(`ticked at ${numMs}`);
});
