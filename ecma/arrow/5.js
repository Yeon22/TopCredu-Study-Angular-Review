function foo() {
  // setTimeout((function() {
  //   console.log(this.a);
  // }).bind(this), 100);

  // 애로우 함수안에 this는 자동으로 가장 가까운 스코프로 자동 바인딩이 되고
  // 변경이 불가능한다.
  // 함수 스코프 foo가 가장 가까움
  setTimeout(() => console.log(this.a), 100);
}

foo.a = 'func';

foo.call(foo);
