//함수 선언식
// function add(a, b) {
//   return a * b;
// }

//함수 표현식
// var add = function (a, b) {
//   return a + b;
// };

var add = (a, b) => a + b;
// 파라미터 => 해당 함수의 바디 {}범위 연산자를 쓰면 return이 없는 것.
// 범위연산자{}가 없으면 자동 return
// 자바의 람다표현식 연산자는 -> 기호를 사용한다.

console.log(add(2, 3));

// 중괄호를 함수 범위연산자가 아니라 객체 선언 연산자로 사용하기 위해서
// 괄호가 필요하다.
var fn = a => ({id:a});
console.log(fn(1)); // {id:1}

// 자바스크립트 컴파일러는 관대하기 때문에 밑에 코드가 에러가 안난다.
'hello';
id:100;
