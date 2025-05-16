import { EventEmitter } from 'events';

class InitThing extends EventEmitter {
	constructor() {
		super();
		this.connected = false;
	}

	connect() {
		setTimeout(() => {
			this.connected = true;
			this.emit('initialized');
		}, 500);
	}

	async noConnectionNeeded(runString) {
		console.log(`Yeah, we can just run this one with '${runString}'. Connected = ${this.connected ? 'Yes' : 'No'}, but it doesn't matter`);
	}

	async runThatThing(runString) {
		if (!this.connected) {
			throw new Error('Not initialized yet');
		}
		console.log(`You ran it with ${runString} at ${new Date()}`);
	}
}
export default InitThing;
