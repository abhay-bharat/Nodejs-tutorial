//This is regarding the basics of the http module
const http = require('http')

//setting up the server
//createServer is a callback, which returns res and req objects
const server = http.createServer((req, res) => {
	if(req.url === '/'){
		//this is the home page
		res.end("Welcome to our home page")
	}
	if(req.url === '/about'){
		res.end("This is our short about page")
	}
	//default response, when requested for page that is not available
	res.end(`
		<h1>Oops!</h1>
		<p> We can't find the page you are looking for</p>
		<a href="/">back home</a>
	`)
})

//mention the port on which the server is listening(on localhost)
server.listen(5000)