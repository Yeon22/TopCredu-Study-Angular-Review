var num = 10;

// console.log(1);
// setTimeout(function(num) {
//   console.log(2);
//   num++;
//   setTimeout(function(num) {
//     console.log(3);
//     num++;
//     setTimeout(function(num) {
//       console.log(4);
//       num++;
//       console.log('num = ' + num);
//     }, 0, num);
//     console.log(5);
//   }, 0, num);
//   console.log(6);
// }, 0, num);
// console.log(7);

console.log(1);

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log(2);
    num++;
    console.log(6);
    resolve(num); // resolve에서 넘긴 파라미터는 promise.then에 콜백함수의 파라미터로 들어간다.
  }, 0, num);
});

promise.then(function(num) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(3);
      num++;
      console.log(5);
      resolve(num);
    }, 0, num);
  });
}).then(function(num) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(4);
      num++;
      resolve(num);
    }, 0, num);
  });
}).then(function (num) {
  console.log('num = ' + num);
});

console.log(7);
