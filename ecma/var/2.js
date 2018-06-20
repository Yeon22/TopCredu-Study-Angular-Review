// var는 스코프 개념이 없다.
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

console.log('i = ' + i); // 접근 가능
