/*
8.5 The lazy buffer: Can you implement createLazyBuffer(size), a factory function
that generates a virtual proxy for a Buffer of the given size? The proxy instance
should instantiate a Buffer object (effectively allocating the given amount of memory)
only when write() is being invoked for the first time. If no attempt to write into the
buffer is made, no Buffer instance should be created.
*/

function createLazyBuffer(size) {
	let buffer = null;
	let bytesWrittenCount = 0;

	return {
		size: () => (buffer ? buffer.length : null),
		write: data => {
			if (!buffer) {
				buffer = Buffer.alloc(size);
			}

			bytesWrittenCount = buffer.write(data);
		},
		read: () => (buffer ? buffer.toString('utf8', 0, bytesWrittenCount) : null),

	};
}

const lazyBuffer = createLazyBuffer(128);
console.log(`read it before write: ${lazyBuffer.read()}`);
console.log(`size before write = ${lazyBuffer.size()}`);
lazyBuffer.write('hello, there');
console.log(`size after write = ${lazyBuffer.size()}`);
console.log(`read it after write: ${lazyBuffer.read()}`);
