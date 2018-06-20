function say() {
  console.log('Hello World!');
  // alert('Hello World!'); 브라우저가 컴파일 할 때만 된다. 노드 컴파일에선 없음.
}

console.log(this === exports);

// black list : JavaScript / white list : Java
// 외부에 제공하고 싶은 자원을 명시적으로 선언해야 한다.
// exports : 노드가 제공하는 예약객체
module.exports = {
  'say' : say
}
