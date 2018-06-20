function add() { //파라미터를 몇개를 주든 계산할 수 있는 로직이다.
  // console.log(arguments);
  var arr = Array.prototype.slice.call(arguments);
  // console.log(arr);
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
