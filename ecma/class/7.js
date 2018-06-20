function Car() {
  // #1. 새 객체에 기본 프로퍼티를 추가한다.
  this.color = 'red';
}

// #2. 새 객체가 상속으로 사용할 수 있도록 자원을 추가한다.
// Car객체가 직접 가지고 있지는 않지만 c가 이어받기를 원한다면 prototype으로...
// 상속관계의 객체들만 사용하기를 원할 때
Car.prototype.show = function () {
  console.log('color = ' + this.color);
};

// #3. 상속과 무관하며, 누구에게나 제공하고 싶은 전역자원을 추가한다.
// 정적인 전역자원이 해당한다.
Car.print = function (obj) {
  console.log('color : ' + obj.color);
};

var c = new Car();
console.log(c.color); // #1
c.show(); // #2
Car.print(c); // #3
Car.print({color: 'blue'}); // #3
