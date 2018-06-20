function Car() {
  var color = 'red';
  this.color = color;
}

var c = new Car();
// 1. {} 새 객체를 생성
// 2. {__proto__: Car.prototype} 새 객체에  상속관련 히든 프로퍼티를 집어넣는다.
// 3. 생성자 호출
// 생성자로 사용시 함수 안에 this는 새 객체를 가리킨다.
// {__proto__: Car.prototype, color: 'red'}
// 4. 객체가 변수 c에 할당된다.
console.log(c);
console.log(c.__proto__ === Car.prototype);
console.log(c instanceof Car); // 위의 코드를 짧게 줄여 쓴 것
