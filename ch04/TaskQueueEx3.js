import { EventEmitter } from 'events'

export class TaskQueueEx3 extends EventEmitter {
	constructor (concurrency) {
	  super();
	  this.concurrency = concurrency
	  this.running = 0
	  this.queue = []
	}
	pushTask (task) {
	  this.queue.push(task)
	  process.nextTick(this.next.bind(this))
	  return this
	}
	next () {
		if (this.running === 0 && this.queue.length === 0) {         
			console.log('it is empty');
			return this.emit('empty')
		  }
		  while (this.running < this.concurrency && this.queue.length) {
			const task = this.queue.shift();

			task((err) => {
			  if (err) {
				this.emit('error', err)
			  }
			  this.running--
			  console.log(`done! running = ${this.running}`);
			  process.nextTick(this.next.bind(this))
			})
			this.running++
		  }
	}
  }