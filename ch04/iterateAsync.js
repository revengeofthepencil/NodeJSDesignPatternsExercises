
const runTheNumbers = numbers => {
	let runningTotal = 0;
	function finish () {
		console.log(`finished with ${numbers.length} numbers and runningTotal = ${runningTotal}`);
	  }
	
	  function iterate (index) {
		if (index === numbers.length) {
		  return finish()
		}
		const number = numbers[index]
		setTimeout(() => {
			runningTotal += number;
			console.log(`ok! waited for the number at index ${index} with number ${number} and runningTotal ${runningTotal}`);
			iterate(index + 1)
		}, number);

	  }

	  iterate(0)
};

const numbers = [5,6,8,1001,11,24,2000,4];
runTheNumbers(numbers);