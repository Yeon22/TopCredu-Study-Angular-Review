class Square {
  constructor(size = 10) {
    this.size = size;
  }
  getArea() {
    return this.size * this.size;
  }
  setArea(area) {
    this.size = Math.sqrt(area);
  }
}

var s = new Square();
console.log(s); // { size: 10 }
console.log(s.getArea()); // 100
s.setArea(400);
console.log(s.size); // 20
console.log(s.getArea()); // 400
console.log(s); // { size: 20 }

console.log(Object.getOwnPropertyDescriptors(Square.prototype));
// {
//   constructor : {
//     value: [Function: Square],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   getArea: {
//     value: [Function: getArea],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   setArea: {
//     value: [Function: setArea],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
