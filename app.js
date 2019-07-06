// function sayHello(name){
//     console.log('hello' + name)
// }

// sayHello('Mosh ')

// *****************************
//******i made logger a var & it didnt work... why?********* */
// const log = require('./logger');

// log.log('message');
// **********************************************

// const path = require('path');

// var pathObject = path.parse(__filename)

// console.log(pathObject)

// ******************************
// use different commands from node documentation to get info with js 

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total memory: ' + totalMemory)

// console.log(`total memory: ${totalMemory}`);
// console.log(`free memory: ${freeMemory}`);

// ************************************

// const fs = require('fs');

// sycronous code below
// const files = fs.readdirSync('./');
// console.log(files);

// use asycrnonous(below)
// fs.readdir('./', function(err, files) {
//     // just displays error, doesnt fix
//     if(err) console.log('error', err);
//     else console.log('result', files);
// });

// ******************************************