var fs = require('fs');

var promise = new Promise(function(resolve, reject) {
  fs.readFile(__dirname + '/readme.txt', 'utf-8', function(error, data) { // 비동기 함수
    if (error) {
      return reject(error); // reject함수는 실패 시 호출 >> #2
    }
    resolve(data); // resolve함수는 성공 시 호출 >> #1
  });
});

// promise
// .then(function(result) { // #1
//   console.log(result);
// })
// .catch(function(error) { // #2
//   console.log(error.message);
// });

async function myReadFile() {
  try {
    // 비동기 호출에서 사용하는 콜백함수 코딩 스타일을
    // 동기방식처럼 작성하는 기술을 async-await 문법이 제공한다.
    var result = await promise;
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}

myReadFile();
