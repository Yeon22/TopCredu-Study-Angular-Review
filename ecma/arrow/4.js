function foo() {
  setTimeout((function() {
    console.log(this.a); // func
  }).bind(this), 100); // bind는 해당 함수의 this를 선고정 하는 방식
}

foo.a = 'func';

foo.call(foo);
