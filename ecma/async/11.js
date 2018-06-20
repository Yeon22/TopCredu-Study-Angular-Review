var req1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('First!');
  }, 4000);
});

var req2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Second!');
    // reject('Second!');
  }, 3000);
});

Promise.all([req1, req2])
.then(function(results) { // req1, req2 모두 응답하면
  console.log('Then: ', results);
}).catch(function(err) {
  console.log('Catch: ', err);
});
