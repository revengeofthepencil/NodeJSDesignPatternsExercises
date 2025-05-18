/*
11.4 Compute farm: Create an HTTP server with a POST endpoint that receives, as input, the code of
a function (as a string) and an array of arguments, executes the function with the given arguments
in a worker thread or in a separate process, and returns the result back to the client. Hint: You
can use eval(), vm.runInContext(), or neither of the two. Note: Whatever code you produce for this
exercise, please be aware that allowing users to run arbitrary code in a production setting can
pose serious security risks, and you should never do it unless you know exactly what the
implications are.
*/
