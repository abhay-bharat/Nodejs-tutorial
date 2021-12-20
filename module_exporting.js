//Module is basically an Encapsulated (share minimum) code
// Since Node provides CommonJS library, which enables every file as module by default

//As this file requires data from other files
//use require keyword

//these imports executes even the console.log present in the files imported. Why so???2
//Shouldn't it just import what is exported and not execute the rest???
const names = require('./names.js')
const sayHii = require('./utils.js')

sayHii(names.abhay)
sayHii(names.aish)
sayHii(`my first cross module app!`)