// interface Food {
//   name: string;
//   calories: number;
// }
class Food {
  name: string;
  calories: number;
}

function speak2(food: Food): void {
  console.log("Our " + food.name + " has " + food.calories + " calories.");
}

var ice_cream = {
  name: "ice cream",
  calories: 200
}

speak2(ice_cream);
