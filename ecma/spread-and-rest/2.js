function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calc(a, ...args) {
  // 함수 파라미터에 ...하면 레스트 파라미터(나머지 파라미터 전부 모아서 args에 배열로 모아라)
  // console.log(Array.isArray(args)); // true
  // console.log(args); // [ 1, 2, 3 ] 
  switch (a) {
    case '+':
      return add(...args); // 펼침 연산자
    case '-':
      return subtract(...args); // 스프레드 연산자
    default:
      return 0;
  }
}

console.log(calc('+', 1, 2, 3)); // 3
console.log(calc('-', 1, 2, 3)); // -1
