//asynchronous file system : this provides methods to enable reading and writing of files in async mode
//the node program continues with other part of code and just offloads the read or write task of a specific user
//to execute in async mode

const {readFile, writeFile} = require('fs')

console.log('start')
//nested callbacks 
readFile('./content/first.txt', 'utf8', (err, result) => { //callback method, returns error and result(i.e. content of the file)
	if(err){
		console.log(err)
		return 
	}
	const first = result 	

	readFile('./content/second.txt', 'utf8', (err, result) => { //callback method, returns error and result(i.e. content of the file)
		if(err){
			console.log(err)
			return 
		}
		const second = result

		writeFile('./content/result_async.txt', 
			`Here is the result : ${first}, ${second}`,
			(err, result) => {
				if(err){
					console.log(err)
					return 
				}
				console.log('Done with this task')
			})
	})
})

console.log('Starting with the next one')

//Output: (Note it is in async)
// start
// Starting with the next one
// Done with this task

