//create using express module
//we will be creating similar content as the http module, but using express
//express is most commonly used and have many advantages over http
const express = require('express')

const app = express() //create an instance of express


//using get request, first parameter is the resource requested
app.get('/', (req, res)=>{
	console.log('server hit by a home request')
	res.end("Welcome to the Express homepage") //express automatically sets the status code
})

app.get('/about', (req, res)=>{
	console.log('server hit by a about request')
	res.write('<h1>About page</h1>')
	res.status(200).end()
})

//for all the other page request, send page not found
app.all('*', (req, res)=>{
	console.log('not found page')
	res.status(404).end('<h1>Requested page not found</h1>')
})
app.listen(5000, ()=>{
	console.log('server listening on port 5000')
})