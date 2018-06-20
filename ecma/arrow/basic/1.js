var obj = {
  title: 'Hello',
  say(){
    console.log(this.title);
  }
};

obj.say();

var talk = obj.say;

global.title = '이렇게 사용하면 안되요.'
talk(); // 여기서의 this는 global
