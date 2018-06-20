// interface Food {
//   name: string;
//   calories: number;
// }
var Food = /** @class */ (function () {
    function Food() {
    }
    return Food;
}());
function speak2(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speak2(ice_cream);
