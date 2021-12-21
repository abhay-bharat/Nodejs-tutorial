//middleware, is used to execute some functionality in between the request and the response
//eg. logging the requests, it is a side task that runs on each request
//req => middleware => res

const express = require('express')
const app = express()
//putting all middlewares in seperate file and then importing the required ones
const logger = require('./logger')


//if the middleware has to be applied to all the api methods below
//then use app.use
app.use(logger)
//home page
//here logger is the middleware
app.get('/', (req, res) =>{
	res.send('Home')
})


app.get('/about', (req, res) =>{
	res.send('About')
})

app.listen(5000, ()=>{
	console.log('server listening on port 5000...')
})