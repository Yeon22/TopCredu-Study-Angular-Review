// Promise
// 콜백함수의 중첩으로 발생하는 가독성 저하를 막기위해서
// 비동기함수의 연동을 평탄하게 해주는 코드 처리 기술

function sum(fn) {
  var total = 0;
  for (var i = 1; i < 1000000000; i++) {
    total += i;
  }
  // return total;
  fn(total);
}

console.log("START");
console.time("TEST");

// var result = sum();
// console.log('result = ' + result);
sum(function (result) {
  console.log('result = ' + result);
});

console.timeEnd("TEST");
console.log('긴급히 처리해야 하는 로직(사용자가 다른 버튼을 누르는 경우)');
