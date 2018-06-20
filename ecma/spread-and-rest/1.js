var arr = [10, 20, 30];
var x = [1, arr, 2];
var y = [1, ...arr, 2];
console.log(x); // [ 1, [ 10, 20, 30 ], 2 ]
console.log(y); // [ 1, 10, 20, 30, 2 ]
