// 자바스크립트의 함수
// 1. 생성자 역할 : 대문자로 시작한다.

function Car() {
  // return 100; // dead code 아무런 영향이 없음.
  // 생성자가 객체자료형(object, array, function)을 리턴하면
  // c의 할당되는 결과가 바뀐다.
  return [1, 2, 3];
}

var c = new Car();
console.log(c);

// c가 가리키는 객체는 Car.prototype 객체의 자원을 사용할 수 있나?
// 즉, 상속관계냐? 그걸 확인하는 연산자 : instanceof
console.log(c instanceof Car);
