import { EventEmitter } from 'events';

/*
3.3 A simple modification: Modify the function created in exercise 3.2
so that it emits a tick event immediately after the function is invoked.
*/
const NUM_MS = 300;

const tickThatThing = (numberMS, callback) => {
	const MS_PER_TICK = 50;
	let totalMS = 0;
	let totalTicks = 0;
	const emitter = new EventEmitter();

	setImmediate(() => {
		emitter.emit('tick', 0);
	});

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
