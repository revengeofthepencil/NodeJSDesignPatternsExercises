import moment from 'moment';

/*
7.3 A tamper-free queue: Create a Queue class that has only one publicly accessible method called
dequeue(). Such a method returns a Promise that resolves with a new element extracted from an
internal queue data structure. If the queue is empty, then the Promise will resolve when a new item
is added. The Queue class must also have a revealing constructor that provides a function called
enqueue() to the executor that pushes a new element to the end of the internal queue. The enqueue()
function can be invoked asynchronously and it must also take care of "unblocking" any eventual
Promise returned by the dequeue() method. To try out the Queue class, you could build a small HTTP
server into the executor function. Such a server would receive messages or tasks from a client and
would push them into the queue. A loop would then consume all those messages using the dequeue()
method.
*/

const MAX_QUEUE_COUNT = 10;
const DATE_FORMAT_FOR_ENTRY_TIME = 'YYYY-MM-DD HH:mm:ss';

class TamperFreeQueue {
	constructor(items, executor) {
		this.items = [...items];
		this.waitingList = [];

		const enqueue = item => {
			if (this.waitingList.length > 0) {
				// is anyone waiting?
				const resolverFromWaitingList = this.waitingList.shift();
				resolverFromWaitingList(item);
			} else {
				this.items.push(item);
			}
		};
		executor(enqueue);
	}

	dequeue() {
		return new Promise(resolve => {
			if (this.items.length > 0) {
				resolve(this.items.shift());
			} else {
				this.waitingList.push(resolve);
			}
		});
	}
}

const waitOneToThreeSeconds = () => {
	const delay = Math.floor(Math.random() * 2000) + 1000;
	return new Promise(resolve => setTimeout(resolve, delay));
};

const getStringWithTime = () => {
	const formattedTime = moment(new Date()).format(DATE_FORMAT_FOR_ENTRY_TIME);
	return `Some text at ${formattedTime}`;
};

// yep, these should be the same
const testString1 = getStringWithTime();
const testString2 = getStringWithTime();
const initItems = [testString1, testString2];

const queue = new TamperFreeQueue(initItems, async enqueue => {
	let queueCount = initItems.length;
	while (queueCount < MAX_QUEUE_COUNT) {
		// eslint-disable-next-line no-await-in-loop
		await waitOneToThreeSeconds();
		enqueue(getStringWithTime());
		queueCount += 1;
	}
});

let printedStringCount = 0;
for (let i = 0; i < MAX_QUEUE_COUNT; i++) {
	// eslint-disable-next-line no-loop-func
	queue.dequeue().then(queueString => {
		printedStringCount += 1;
		console.log(`String #${printedStringCount} = '${queueString}'`);
	});
}
