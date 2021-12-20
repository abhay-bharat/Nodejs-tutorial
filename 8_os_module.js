//import os module(it is a builtin module)
const os = require('os')

//method to obtain info about current user
const user = os.userInfo()
console.log(user)
console.log("\n")

//method returning the uptime of the system
console.log(`The system uptime is ${os.uptime} seconds`)

//user defined type for the current os info
const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
}

console.log(currentOS)