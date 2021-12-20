//event loop example, offload task
console.log('first')
//offloads below task, because setTimeout is asynchronous task
//set to 0 secs
setTimeout(() => {
	console.log('second')
}, 0)
console.log('third')