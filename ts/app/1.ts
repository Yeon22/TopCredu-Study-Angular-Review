interface IGreeter {
  greet(): string; // 추상메소드
}

class Greeter implements IGreeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet(): string {
    return 'Hello, ' + this.greeting;
  }
}

var greeter = new Greeter('Everybody');
var result = greeter.greet();
console.log(result);
