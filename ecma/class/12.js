class Vehicle {
  constructor(color, name){
    this.color = color;
    this.name = name;
    // this.start = function () {
    //   console.log('Vehicle is moving...');
    // };
  }
  start() { // Vehicle의 프로토타입쪽에 존재
    console.log('Vehicle is moving...');
  };
  static getName(vehicle) {
    return vehicle.name;
  }
}

// ES6 분법을 ES5 문법으로 바꾸세요.

var v = new Vehicle('red', 'K9'); // var v 의 new Vehicle은 Vehicle의 프로토타입을 상속
console.log(v.color); // 'red'
v.start(); // 'Vehicle is moving...'
console.log(Vehicle.getName(v)); // 'K9'

var v2 = new Vehicle('blue', 'K7');
console.log(v2.color);
v2.start();
console.log(Vehicle.getName(v2));
