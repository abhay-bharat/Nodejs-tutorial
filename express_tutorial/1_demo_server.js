//create a dummy server

const http = require("http")
const { readFileSync } = require('fs')

//get all files
//it is outside the createserver, which means need not read file each time a new server 
//instance is created
// const homepage = readFileSync('./express/index.html') //if spinning through the outer package
const homepage = readFileSync('./index.html')

//this is the server instance that gets created for every user request
const server = http.createServer((req, res)=>{
	////request object
	url = req.url
	//homepage
	console.log('accessed')
	if(url === '/'){
		res.writeHead(200, {'content-type' : 'text/html'})
		// res.write('<h1>Welcome to home page</h1>')
		res.write(homepage)
		res.end()
	}
	else if(url === '/about'){
		res.writeHead(200, {'content-type' : 'text/html'})
		res.write('<h1>About Page</h1>')
		res.end()
	}
	//not found page
	else{
		res.writeHead(404, {'content-type' : 'text/html'})
		res.write('<h1>Requested Page not found</h1>')
		res.end()
	}
	// //to write a response header (status code, key-value pair of the meta data)
	// res.writeHead(200, {'content-type' : 'text/html'}) //this status code is standard and 
	// //accordingly interpreted by the browser

	// //to send the body of the response
	// res.write('<h1>Welcome to the First Server</h1>')

	// console.log('about to end response')
	// //Note*** : this is important to have atleast one res.end(), it indicates that the body 
	// //has been sent
	// res.end()
})

//port number till 1024 is taken by the standard ports, eg. 80 for http
//port number directs the content to the write application that can handle that particular
//type of request
server.listen(5000)