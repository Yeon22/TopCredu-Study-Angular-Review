class Vehicle {
  constructor(speed) {
    this.speed = speed
  }
  go() {
    console.log('go...');
  }
}

class Car extends Vehicle {
  // ReferenceError: Must call super constructor
  // in derived class before accessing 'this'
  // or returning from derived constructor
  // constructor를 생략하면 자동으로 생성된다. 파라미터까지 전파시킨다.
  // constructor(speed) {
  //   super(speed); // call, apply가 자동으로 적용된다.
  // }
  go() { // 메소드 오버라이딩(재정의)
    super.go();
    console.log('go... stop!');
  }
}

var c = new Car(200);
console.log(c);
c.go(); // 객체 입장에서 가장 가까운 것이 사용된다.
