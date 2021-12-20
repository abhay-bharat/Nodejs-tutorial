//making some functionalities available to other files that import it

const sayHi = (name)=>{
	console.log(`Hello there ${name}`) //template string is used when we have a variable as placeholder
}

console.log('afjkf\n')
//export this function to make it available to the module_exporting file
module.exports = sayHi