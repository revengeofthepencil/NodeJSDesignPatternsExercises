import { EventEmitter } from 'events';

// eslint-disable-next-line import/prefer-default-export
export class TaskQueueEx3 extends EventEmitter {
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
			const task = this.queue.shift();
			task(err => {
				if (err) {
					this.emit('error', err);
				}
				this.running--;
				process.nextTick(this.next.bind(this));
			});
			this.running++;
		}

		return this.running;
	}
}
