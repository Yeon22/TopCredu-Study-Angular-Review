var EventEmitter = require('events').EventEmitter;

// console.log(EventEmitter.prototype);

function Counter(limit = 5) {
  // 다른 생성자에 this를 전달하면서 호출하면 해당 함수에서
  // this.프로퍼티 코드로 새 객체에 프로퍼티가 추가된다.
  // console.log(this);
  EventEmitter.call(this);
  // console.log(this);

  var count = 0;

  this.start = () => {
    this.emit('start');

    var intervalId = setInterval(() => {
      ++count;
      this.emit('count', count);

      if (count >= limit) {
        clearInterval(intervalId);
        this.emit('stop');
      }
    }, 1000);
  };
}

// 새 객체를 만들고 __proto__가 EventEmitter.prototype을 가리킨다.
Counter.prototype = Object.create(EventEmitter.prototype);

// module.exports = {
//   Counter
// }

exports.Counter = Counter;
