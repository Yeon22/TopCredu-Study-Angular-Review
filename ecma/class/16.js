var obj = {
  naumber: 10
};

// 객체의 프로퍼티의 설명자를 달라
console.log(Object.getOwnPropertyDescriptors(obj));
// 프로퍼티의 상태 정보
// {
//   naumber : {
//     value: 10,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

Object.defineProperty(obj, 'num', {
  get: function() {
    return this.number;
  }
});

// 프로퍼티에는 2가지 종류가 있다.
// 값을 보관하는 value(값) 프로퍼티 접근을 제어하는 access(접근제어) 프로퍼티
console.log(Object.getOwnPropertyDescriptors(obj));
// {
//   naumber : { // 값 프로퍼티
//     value: 10,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   num: { // 접근제어 프로퍼티
//     get: [Function: get],
//     set: undefined,
//     enumerable: false,
//     configurable: false
//   }
// }
