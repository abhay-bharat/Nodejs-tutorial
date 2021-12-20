// Global variables - This section introduces to some of the global variables provided by node. 
// Required because unlike js in chrome, node doesn't have access to the window, so these
// variables come handy when deciding on step based on output of certain global variables

// __dirname - gives name of the current directory path
// console.log(__dirname)

// __filename - returns name of the current file path
// console.log(__filename)

// process lot of environment information about the current process that is running 
// console.log(process)

//information about the current module
//Note : module is basically an encapsulated code (i.e. a js file)
//In Node we have commonJS, every file is module by default
// console.log(module)


//A simple hello world application using setInterval method
//Also shows how to write javascript functions, using lambda approach

//Prints hello world every 1 sec(1000ms)
setInterval(() => {
	console.log("Hello World!")
}, 1000)