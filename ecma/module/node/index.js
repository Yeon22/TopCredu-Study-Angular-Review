// hello.js에 존재하는 함수 say()를 임포트한다.
// 노드는 CommonJS 방식을 채택
const hello_exports = require('./hello'); // ./ : index.js와 hello.js가 같은 위치에 있다.
// hello.js 파일에서 선언한 module.exports 객체가 할당된다.

hello_exports.say();
