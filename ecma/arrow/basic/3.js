var obj = {
  title: 'Hello',
  say(x, y){
    console.log(this.title, x, y);
  }
};

obj.say(100, 200);

// 함수 안에 this가 obj로 고정된 함수를 리턴한다.
var talk = obj.say.bind(obj);
talk(300, 400);
