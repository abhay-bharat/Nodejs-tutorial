const logger = (req, res, next)=>{
	const method = req.method
	const url = req.url
	const time = new Date().getFullYear()
	console.log(method, url, time)
	//this is must to be called explicitly in middleware, to allow the next route handler
	//to handle the request
	next()
}


module.exports = logger