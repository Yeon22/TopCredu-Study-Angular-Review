class Car {
  // #1. 새 객체에 기본 프로퍼티를 추가한다.
  constructor(){ // 예약어
    this.color = 'red';
  }
  // #2. 새 객체가 상속으로 사용할 수 있도록 자원을 추가한다.
  // Car.prototype 객체에 추가된다. 자식객체만 사용할 수 있다.
  // 자식에게 공통된 로직이 필요할 경우 사용.
  show() {
    console.log('color = ' + this.color);
  }
  // #3. 상속과 무관하며, 누구에게나 제공하고 싶은 전역자원을 추가한다.
  static print(obj) {
    console.log('color : ' + obj.color);
  }
}

var c = new Car();
console.log(c.color); // #1
c.show(); // #2
Car.print(c); // #3

console.log(Number.parseInt('100', 10));
