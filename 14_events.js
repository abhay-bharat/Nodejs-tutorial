//Events module functionalities

const EventEmitter = require('events')

//there are builtin event emitters as well 
//creating an instance of the class events
const customEmitter = new EventEmitter()


//response is the event name
//there are builtin method names, eg. request
//if custom then we need to explicitly emit that event
customEmitter.on('response', (name, id) => {
	console.log(`data received for user : ${name} with id = ${id}`)
})

//call event 
customEmitter.emit('response', 'abhay', 34)