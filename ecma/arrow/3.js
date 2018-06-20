function foo() {
  console.log(this === foo); // true

  setTimeout(function () {
    console.log(this); // Timeout

    console.log(this.a); // undefined
  }, 100);
}

foo.a = 'func';

foo.call(foo);

// 자바스크립트의 this는 가변적이기 때문에 함수마다 따로따로 this를 계산해야한다.
