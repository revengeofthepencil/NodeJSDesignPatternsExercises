import superagent from 'superagent';

/*
11.4 Compute farm: Create an HTTP server with a POST endpoint that receives, as input, the code of
a function (as a string) and an array of arguments, executes the function with the given arguments
in a worker thread or in a separate process, and returns the result back to the client. Hint: You
can use eval(), vm.runInContext(), or neither of the two. Note: Whatever code you produce for this
exercise, please be aware that allowing users to run arbitrary code in a production setting can
pose serious security risks, and you should never do it unless you know exactly what the
implications are.
*/

const url = 'http://localhost:8000';
const args = [1, 2, 3, 4, 5, 6];

const firstFunction = nums => nums.reduce((a, b) => a + b, 0);
const secondFunction = async nums => {
	if (!nums || nums.length === 0) { return 0; }
	const result = nums.reduce((a, b) => a + b, 0);
	const lastNumber = nums[nums.length - 1];
	const sleepTime = lastNumber < 1000 ? lastNumber * 1000 : lastNumber;
	await new Promise(resolve => setTimeout(resolve, sleepTime));
	return `${result} after sleeping for ${sleepTime};`;
};
const thirdFunction = nums => nums.reduce((a, b) => a - b, 0);
const fourthFunction = nums => nums.reduce((a, b) => a + (b * b), 0);

const sendFunctionWithParams = func => {
	const payload = {
		function: func.toString(),
		arguments: args,
	};
	superagent
		.post(url)
		.send(payload)
		.then(res => {
			console.log(`Response with function ${func}: ${JSON.stringify(res.body.result)}`);
		})
		.catch(err => {
			console.error('Error:', err.message);
		});
};

[firstFunction, secondFunction, thirdFunction, fourthFunction].forEach(func => {
	sendFunctionWithParams(func);
});
