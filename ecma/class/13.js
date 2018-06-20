// ES6 문법을 ES5 문법으로 바꾸세요.
function Vehicle(color, name) {
  // 새 객체의 프로퍼티
  this.color = color;
  this.name = name;
}

// 상속관계로 제공하는 자원
Vehicle.prototype.start = function () {
  console.log('Vehicle is moving...');
}

// 누구에게나 제공하는 static한 자원
Vehicle.getName = function (vehicle) {
    return vehicle.name;
}

var v = new Vehicle('red', 'K9');
console.log(v.color); // 'red'
v.start(); // 'Vehicle is moving...'
console.log(Vehicle.getName(v)); // 'K9'

var v2 = new Vehicle('blue', 'K7');
console.log(v2.color);
v2.start();
console.log(Vehicle.getName(v2));
