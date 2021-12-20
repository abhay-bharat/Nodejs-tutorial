//using builtin event : request for the http module
const http = require('http')

//create a server 
const server = http.createServer()

//emits request event 
server.on('request', (req, res) => {
	res.end("Welcome")
	console.log(`Welcome to the request event `)
})

server.listen(5080)