// var fs = require('fs');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

// fs.readFileAsync(__dirname + '/readme.txt', 'utf-8')
// .then(function(result) {
//   console.log(result);
// }).catch(function(error) {
//   console.log(error.message);
// });

async function myReadFile() {
  try {
    var result = await fs.readFileAsync(__dirname + '/readme.txt', 'utf-8');
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}

myReadFile();
