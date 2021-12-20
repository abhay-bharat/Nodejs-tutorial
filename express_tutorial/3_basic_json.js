//API programming using json object
//send a json response to the request
//it is the job of the frontend frameworks to handle these json response and display to the user

const express = require('express')

const app = express()

//sending a json response
app.get('/', (req, res) => {
	//create a json object and send it
	res.json([{name:'Abhay'},{last_name : 'Singh'}])
})


app.listen(5000, ()=>{
	console.log('server is listening on port 5000')
})