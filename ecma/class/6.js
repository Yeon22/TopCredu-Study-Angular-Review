// 함수는 선언 즉시 객체로 인정받는다.
function Car() {
  this.color = 'red';
}

// 함수를 선언하면 자동으로 함수명.prototype 객체가 만들어진다.
Car.prototype.show = function () {
  console.log('color = ' + this.color);
};

Car.print = function (obj) {
  console.log('color : ' + obj.color);
};

var c = new Car();
console.log(c);
c.show();
Car.print(c);
