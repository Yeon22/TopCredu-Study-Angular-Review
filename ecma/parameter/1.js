// $.map([1,2,3], function (item, idx) {
//
// });

function add(a, b) {
  console.log(typeof a, typeof b);
  return a + b;
}

// console.log(add()); //undefined + undefined = NaN
// console.log(add(2)); //number + undefined = NaN
// console.log(add(2, 3));
console.log(add(2, 3, 4)); //4는 안쓰고 무시. 앞에 2와 3만 사용하기 때문에 결과는 5
