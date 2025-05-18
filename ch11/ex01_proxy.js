/* eslint-disable no-restricted-syntax */
import InitThing from './initThing.js';

/*
11.1 Proxy with pre-initialization queues: Using a JavaScript Proxy, create a wrapper for adding
pre-initialization queues to any object. You should allow the consumer of the wrapper to decide
which methods to augment and the name of the property/event that indicates if the component is
initialized.
*/
class InitWrapper {
	constructor() {
		this.proxyObjIsReady = false;
		this.eventQueue = [];
	}

	static wrap(parentObj, eventReady, toAugment = []) {
		const wrapper = new InitWrapper();

		parentObj.on(eventReady, async () => {
			console.log(`the event is ready and we have ${wrapper.eventQueue.length} waiting`);
			wrapper.proxyObjIsReady = true;
			for (const event of wrapper.eventQueue) {
				// eslint-disable-next-line no-await-in-loop
				await event();
			}
		});

		return new Proxy(parentObj, {
			get(obj, property) {
				if (typeof property === 'string' && toAugment.includes(property)) {
					return (...args) => {
						if (wrapper.proxyObjIsReady) {
							return obj[property](...args);
						}
						wrapper.eventQueue.push(() => obj[property](...args));
						return null;
					};
				}
				return obj[property];
			},
		});
	}
}

const wrapped = InitWrapper.wrap(new InitThing(), 'initialized', ['runThatThing']);
wrapped.noConnectionNeeded('test');
wrapped.runThatThing('party!');
wrapped.runThatThing('Another party!');
wrapped.connect();
