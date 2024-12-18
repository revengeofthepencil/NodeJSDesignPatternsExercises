import { EventEmitter } from 'events';

// eslint-disable-next-line import/prefer-default-export
export class TaskQueueEx02 extends EventEmitter {
	constructor(concurrency) {
		super();
		this.concurrency = concurrency;
		this.running = 0;
		this.queue = [];
	}

	runTask(task) {
		return new Promise((resolve, reject) => {
			this.queue.push(async () => {
				try {
					const result = await task();
					resolve(result);
				} catch (error) {
					reject(error);
				}
			});
			process.nextTick(this.next.bind(this));
		});
	}

	async next() {
		if (this.running === 0 && this.queue.length === 0) {
			return this.emit('empty');
		}

		while (this.running < this.concurrency && this.queue.length > 0) {
			const task = this.queue.shift();
			this.running++;

			try {
				// eslint-disable-next-line no-await-in-loop
				await task();
			} catch (error) {
				this.emit('error', error);
			} finally {
				this.running--;
				this.next();
			}
		}
		return this.running;
	}
}
