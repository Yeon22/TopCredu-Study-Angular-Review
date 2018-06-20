class Car {
  // #1. 새 객체에 기본 프로퍼티를 추가한다.
  constructor(){ // 예약어
    this.color = 'red';
  }
  // #2. 새 객체가 상속으로 사용할 수 있도록 자원을 추가한다.
  show() {
    console.log('color = ' + this.color);
  }
}

// #2. 새 객체가 상속으로 사용할 수 있도록 자원을 추가한다.
// Car.prototype.show = function () {
//   console.log('color = ' + this.color);
// };

// #3. 상속과 무관하며, 누구에게나 제공하고 싶은 전역자원을 추가한다.
Car.print = function (obj) {
  console.log('color : ' + obj.color);
};

var c = new Car();
console.log(c.color); // #1
c.show(); // #2
Car.print(c); // #3
