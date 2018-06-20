var obj = {
  title: 'Hello',
  say(x, y){
    console.log(this.title, x, y);
  }
};

obj.say(100, 200);

var talk = obj.say;

// 함수가 사용할 this를 직접 지정하면서 호출하는 방식이다.
talk.call(obj, '!', '...');
talk.apply(obj, ['?', '@']); // apply는 배열을 낱개로 쪼갠다.
