//middleware, is used to execute some functionality in between the request and the response
//eg. logging the requests, it is a side task that runs on each request
//req => middleware => res

const express = require('express')
const app = express()

//middleware is a javascript function that executes specific task during the web request
//express supplies the req and res parameters by default
//next is used to explicitly say the server to go ahead with the next middleware if any waiting in the line 
const logger = (req, res, next)=>{
	const method = req.method
	const url = req.url
	const time = new Date().getFullYear()
	console.log(method, url, time)
	//next is must to be called explicitly in middleware, to allow the next route handler
	//to handle the request
	next()
}

//home page
//here logger is the middleware
app.get('/', logger, (req, res) =>{
	res.send('Home')
})


app.get('/about', logger, (req, res) =>{
	res.send('About')
})

app.listen(5000, ()=>{
	console.log('server listening on port 5000...')
})