function Car() {
  var kolor = 'red'; // 지역변수

  // 새 객체에 기본 프로퍼티로 추가하고 싶다면
  // this.key 형태로 설정한다.
  this.color = kolor; // this.이라고 해야 들어간다.
}

// 생성자 함수를 사용하여 만들어진
// 자식 객체에게 부모로써 제공하고 싶은 자원을 등록한다.
Car.prototype.show = function () {
  console.log('color = ' + this.color);
};

var c = new Car();
console.log(c); // { color: 'red' }
console.log(c.__proto__ === Car.prototype);
console.log(c instanceof Car);
c.show();
