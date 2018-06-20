global.a = 'global';

function foo() {
  console.log(this.a);
}

foo.a = 'func';

foo(); // global

foo.call(foo); // func
