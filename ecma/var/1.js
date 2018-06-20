// var(riable)
// 자바는 기동 메소드에서 코드가 시작된다.
// 자바스크립트는 기동 메소드가 없다. 파일 위부터 시작한다.
// 조건문의 범위연산자와 함수의 범위연산자는 다르다.

var a = 1;
console.log(a);

if (true) { // 범위연산자, 블록연산자
  console.log(a);
  var b = 2;
}

console.log(b);

function x() { // 범위연산자, 블록연산자, 스코프연산저
  var c = 3;
}

console.log(c);
