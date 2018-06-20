console.log(1);

// 1. 시간조건을 만족하는가?
// 2. 메인스레드가 IDLE 상태인가? IDLE 상태 : 처리할 로직이 없는 상태
setTimeout(function() {
  console.log(2);

  setTimeout(function() {
    console.log(3);

    setTimeout(function() {
      console.log(4);
    }, 0);

    console.log(5);
  }, 0);

  console.log(6);
}, 0);

console.log(7);

// 출력순서
// 1 7 2 6 3 5 4

// 시간지연
console.time("TEST");
var oldTime = Date.now();
while (Date.now() < oldTime + 5000) {

}
console.timeEnd("TEST");
