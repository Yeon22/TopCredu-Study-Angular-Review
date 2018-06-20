for (var i = 1; i <= 3; i++) {
  // Closure
  (function() {
    var j = i;
    setTimeout(function () {
      console.log(j);
    }, 1000);
  }());}

console.log('i = ' + i);
