//path module, which gives current system path specific details
const path = require('path')

//prints the path seperator that is used by the current system
console.log(path.sep)

//join method to join paths
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath) //output : /content/subfolder/test.txt

//method to get the base file name
const base = path.basename(filePath)
console.log(base) //output : test.txt

//to get the absolute path
const absolute = path.resolve()
console.log(absolute)

console.log("Just checking using nodemon")
