(function(global) {
  'use strict';
  function play() {
    console.log('Sleeping...');
  }
  global.A = {
    'play' : play
  };
}(global));

global.A.play();

(function(global) {
  'use strict';
  function play() {
    console.log('Watching TV...');
  }
  global.B = {
    'play' : play
  };
}(global));

global.B.play();
