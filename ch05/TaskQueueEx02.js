import { EventEmitter } from 'events';

// eslint-disable-next-line import/prefer-default-export
export class TaskQueueEx02 extends EventEmitter {
	constructor(concurrency) {
		super();
		this.concurrency = concurrency;
		this.running = 0;
		this.queue = [];
	}

	pushTask(task) {
		this.queue.push(task);
		process.nextTick(this.next.bind(this));
		return this;
	}

	next() {
		if (this.running === 0 && this.queue.length === 0) {
			return this.emit('empty');
		}
		while (this.running < this.concurrency && this.queue.length) {
			console.log(`task thing with queue length ${this.queue.length} and running ${this.running}`);
			const task = this.queue.shift();
			task(err => {
				if (err) {
					this.emit('error', err);
				}
				this.running--;
				console.log(`done! running = ${this.running}`);
				process.nextTick(this.next.bind(this));
			});
			this.running++;
		}

		return this.running;
	}
}
