/* eslint-disable import/prefer-default-export */
export class AsyncQueueTask5 {
	constructor() {
		this.asyncQueue = [];
	}

	enqueue(task) {
		this.asyncQueue.push(task);
		this.asyncQueueIterator = this.asyncQueue[Symbol.iterator]();
	}

	[Symbol.asyncIterator]() {
		const { asyncQueueIterator } = this;
		return {
			async next() {
				const iteratorResult = asyncQueueIterator.next();
				if (iteratorResult.done) {
					return { done: true, value: null };
				}
				const task = iteratorResult.value;
				try {
					const taskRes = await task();
					return { done: false, value: taskRes };
				} catch (err) {
					return {
						done: false,
						value: `error: ${err.message}`,
					};
				}
			},

			// Confession: I needed ChatGPT to explain this part
			[Symbol.asyncIterator]() {
				return this;
			},
		};
	}
}
