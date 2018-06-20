var x = 100;
var y = 200;

var obj = {
  a: 10,
  x: x,
  y,
  say: function () { // 익명 함수
    console.log('Hello');
  },
  talk() {
    console.log('Hello');
  }
};

console.log(obj);
obj.say();
obj.talk();
