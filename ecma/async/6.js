var fs = require('fs');

console.log(__dirname);

fs.readFile(__dirname + '/readme.txt', 'utf8', function(error, data) {
  if (error) {
    return console.error(error);
  }
  console.log(data);
});
