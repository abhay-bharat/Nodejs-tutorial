//local
const secret = "Don't share"
// const sec_print = require('./utils.js')
// sec_print(secret)

console.log('sahfj\n')
const abhay = 'abhay'
const aish = 'aish'

//this indicates the variables that are made available across files
//kind of global 
//we are only sharing few variables and not secret!
//NOTE : ensuring share minimum property
module.exports = {abhay, aish}