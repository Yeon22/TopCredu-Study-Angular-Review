function add(...arr) { // Rest Parameter
  //함수 파라미터에 점3개 ...을 붙이면 아래 주석처리한 거와 똑같다.
  // var arr = Array.prototype.slice.call(arguments);
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(add());
console.log(add(2));
console.log(add(2, 3));
console.log(add(2, 3, 4));
