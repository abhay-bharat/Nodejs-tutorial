//this is just used to create a big file, used to check the streaming of data from the file
const {writeFileSync} = require('fs')

for(let i = 0; i < 10000; ++i){
	writeFileSync('./content/big.txt', `hello world : ${i}\n`, {flag:'a'})
}