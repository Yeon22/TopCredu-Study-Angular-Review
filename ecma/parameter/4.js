function add2(x, y) {
  x = x || 0; // x가 사용할 수 있는 값이면 할당하고 아니면 0을 할당한다.
  y = y || 0; // y가 사용할 수 있는 값이면 할당하고 아니면 0을 할당한다.
  return x + y;
}
console.log(add2()); // 0

// 함수를 연동할 때 값이 없으면 0을 할당한다.
// 위의 함수와 같음.
function add3(x = 0, y = 0) { // 조건 할당 : 파라미터를 받지 못하는 경우에만 작동
  return x + y;
}
console.log(add3()); // 0

function add4(x = 0, y = 0, z = x + y) {
  return z;
}
console.log(add4()); // 0
console.log( add4 (1, 2)); // 3
console.log( add4 (1, 2, 999)); // 999
