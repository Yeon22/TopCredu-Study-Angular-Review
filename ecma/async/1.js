// Call-Back Function
// 동기방식 vs 비동기방식

/**
 * 동기방식
 */
function sum(a, b) {
  return a + b;
}

var result = sum(2, 3);
// 함수가 리턴하는 결과를 할당받는다. = 함수가 리턴할 때까지 기다린다.
console.log('result = ' + result);

/**
 * 비동기방식 : 할당을 안받는다. = 기다리지 않는다.
 * 싱글 스레드인 메인 스레드는 시간이 걸리면 안된다.
 */
function add(a, b, fn) {
  var result = a + b;
  fn(result);
}

// 콜백 함수 : 다른 함수에 전달되는 함수
var cb = function (result) {
  console.log('result = ' + result);
}
add(2, 3, cb);
