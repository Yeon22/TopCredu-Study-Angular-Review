var obj = { //객체 연산자
  a : 10,
  b : 20,
  result : 0,
  add : function () { //범위 연산자
    console.log(this);
    this.result = this.a + this.b;
  }
};

var {a, result, b, add} = obj; //해체할당 연산자, var {객체 키만 들어올 수 있다.} = obj;
// var a = obj.a;
// var b = obj.b;

console.log(a, b, result);

add.call(obj);
// console.log(global.result);

var {result} = obj;
