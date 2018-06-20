class Square {
  constructor(size = 10) {
    this.size = size;
  }
  // 프로퍼티 2개를 하나로 줄일 수 있는 수단
  get area() {
    return this.size * this.size;
  }
  set area(area) {
    this.size = Math.sqrt(area);
  }
}

var s = new Square();
console.log(s); // { size: 10 }
//함수 처럼 만들었지만 프로퍼티처럼 사용한다.
console.log(s.area); // 100  Getter
s.area = 400; // 할당 연산자와 함께 사용하면 Setter
console.log(s.size); // 20
console.log(s.area); // 400
console.log(s); // { size: 20 }

console.log(Object.getOwnPropertyDescriptors(Square.prototype));
// {
//   constructor : {
//     value: [Function: Square],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   area: { 함수명은 프로퍼티명이 되고,
//   접근제어 프로퍼티라 get프로퍼티와 set프로퍼티를 따로 가지고 있다.
//     get: [Function: get area],
//     set: [Function: set area],
//     enumerable: false,
//     configurable: true
//   }
// }
