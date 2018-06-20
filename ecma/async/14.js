const {Counter} = require('./13');

var counter = new Counter();
// console.log(counter);

counter.on('start', function () {
  console.log('Counter Started!');
});

counter.on('count', function (count) {
  console.log(count);
});

counter.on('stop', function () {
    console.log('stop');
});

counter.start();

// 실습: 'stop' 이벤트를 방출하고 그에 따라 기동하는 콜백함수로
// 로그를 출력하세요.
