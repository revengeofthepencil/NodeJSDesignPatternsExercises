const runParallel = tasks => {
	function finish () {
		console.log(`All set! Ran ${tasks.length} tasks`)
	  }
	  
	  
	let completed = 0
	tasks.forEach(task => {

	 task(() => {
		completed = completed + 1;
		console.log(`got it! completed count= ${completed}`);
		if (completed === tasks.length) {
		  finish()
		}
	  })
	})
};

const numbers = [5,6,8,1001,11,24,2000,4,1];
  
const tasks = numbers.map(number =>
	callback => {
		setTimeout(() => {
			console.log(`waited ${number} ms`);
			callback();
		}, number );
	} 
);

runParallel(tasks);