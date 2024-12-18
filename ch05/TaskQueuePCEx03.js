// eslint-disable-next-line import/prefer-default-export
export class TaskQueuePC {
	constructor(concurrency) {
		this.taskQueue = [];
		this.consumerQueue = [];

		// spawn consumers
		for (let i = 0; i < concurrency; i++) {
			this.consumer();
		}
	}

	consumer() {
		const processNextTask = () => {
			this.getNextTask()
				.then(task => task())
				.then(() => processNextTask())
				.catch(err => {
					console.error(err);
					processNextTask();
				});
		};

		processNextTask();
	}

	getNextTask() {
		return new Promise(resolve => {
			if (this.taskQueue.length !== 0) {
				return resolve(this.taskQueue.shift());
			}

			return this.consumerQueue.push(resolve);
		});
	}

	runTask(task) {
		return new Promise((resolve, reject) => {
			const taskWrapper = () => {
				const taskPromise = task();
				taskPromise.then(resolve, reject);
				return taskPromise;
			};

			if (this.consumerQueue.length !== 0) {
				// there is a sleeping consumer available, use it to run our task
				const consumer = this.consumerQueue.shift();
				consumer(taskWrapper);
			} else {
				// all consumers are busy, enqueue the task
				this.taskQueue.push(taskWrapper);
			}
		});
	}
}
