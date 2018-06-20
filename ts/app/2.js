var Car = /** @class */ (function () {
    // doors;
    function Car(color, doors) {
        if (color === void 0) { color = 'red'; }
        this.doors = doors;
        this.color = color;
        // this.doors = doors;
    }
    return Car;
}());
var c = new Car('blue', 5);
console.log(c);
