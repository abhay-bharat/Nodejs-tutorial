//read stream of data from huge file, this saves buffer memory as we don't read entire data in one go and store in buffer
//data is just streamed

//import class createReadStream
const { createReadStream } = require('fs')

//by default reads in junk of 64Kb, use highWaterMark to set it 
// const stream = createReadStream('./content/big.txt')
const stream = createReadStream('./content/big.txt', {
	highWaterMark : 95000,
	encoding: 'utf8',
})

//use builtin event data to stream data
//reads data in junks
stream.on('data', (result) =>{
	console.log(result)
})