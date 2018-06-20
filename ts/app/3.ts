var burger: string = 'hamburger';
var calories: number = 300;
// var calories: Number = 300;
var tasty: boolean = true;

function speak(food: string, energy: number): void {
  console.log("Our " + food + " has " + energy + " calories.");
}

speak(burger, calories);
