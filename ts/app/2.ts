class Car {
  color;
  // doors;
  constructor(color = 'red', private doors) {
    this.color = color;
    // this.doors = doors;
  }
}

var c = new Car('blue', 5);
console.log(c);
