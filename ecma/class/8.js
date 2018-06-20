// function Car() {
//   // #1. 새 객체에 기본 프로퍼티를 추가한다.
//   this.color = 'red';
// }

// 클래스 문법으로 생성자 함수를 작성할 수 있다.
// 결국 함수를 선언하는 새로운 방법의 추가를 의미하고
// 이렇게 선언된 함수는 메소드로 사용될 수 없다.
class Car {
  // #1. 새 객체에 기본 프로퍼티를 추가한다.
  constructor(){ // 예약어
    this.color = 'red';
  }
}

// TypeError: Class constructor Car cannot be invoked without 'new'
// Car();

// #2. 새 객체가 상속으로 사용할 수 있도록 자원을 추가한다.
Car.prototype.show = function () {
  console.log('color = ' + this.color);
};

// #3. 상속과 무관하며, 누구에게나 제공하고 싶은 전역자원을 추가한다.
Car.print = function (obj) {
  console.log('color : ' + obj.color);
};

var c = new Car();
console.log(c.color); // #1
c.show(); // #2
Car.print(c); // #3
