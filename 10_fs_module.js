//Synchronous approach : Tasks are performed in order, that is until the reading or writing is not completed for a given user
//can't proceed further with the next section of node code, till it completes
//this becomes serious issue if multiple users are accesing the files

//To read data from the file, using file system module
// const fs = require('fs') //this imports the entire file system module

console.log('Start')
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8') //parameters : give relative path to the file, format in which the file is to be read
// . means current directory and .. means directory containing the current directory

console.log(first)

//to write content to the file
//if file doesn't exist, it creates it
//if exists, it overwrites the content
//to append use 3rd parameter - flag = 'a'
writeFileSync('./content/second.txt', 'hello this is second file') //2nd parameter is the content to be written in the file

//using template string we can pass the file name as the parameter
writeFileSync('./content/second.txt', `Using template : ${first}`)

//append
writeFileSync('./content/second.txt', 'hello this is second file', {flag: 'a'})

console.log('Done with this task')
console.log('Starting with the next one')

//output:
// start
// Done with this task
// Starting with the next one