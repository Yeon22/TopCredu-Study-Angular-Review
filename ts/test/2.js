var Car = /** @class */ (function () {
    function Car(color) {
        if (color === void 0) { color = 'red'; }
        this.color = color;
    }
    return Car;
}());
var c = new Car();
console.log(c);
