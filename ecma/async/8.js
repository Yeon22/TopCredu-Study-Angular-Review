var fs = require('fs');

var promise = new Promise(function(resolve, reject) {
  fs.readFile(__dirname + '/readme.txt', 'utf-8', function(error, data) {
    if (error) {
      return reject(error); // reject함수는 실패 시 호출 >> #2
    }
    resolve(data); // resolve함수는 성공 시 호출 >> #1
  });
});

// 모든 then 함수는 첫 번째 파라미터로 성공 콜백
// 두 번째 파라미터로 실패 콜백을 설정할 수 있다.
promise.then(function(result) { // #1
  console.log(result);
}, function(error) { // #2
  console.log(error.message);
});
