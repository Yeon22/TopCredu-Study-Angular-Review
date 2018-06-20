// User 클래스를 선언하고 객체를 만들어서 작동여부를 확인하세요.
class User {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  getSchedule() {
    console.log('스케줄을 본다.');
    return null;
  }
  introduce(string) {
    console.log(string);
  }
  // static introduce(user) {
  //   console.log(user.name + '이 자기소개를 한다.');
  // }
}

var u = new User(29, '홍길동');
console.log(u);
u.getSchedule();
u.introduce('자기소개를 한다.');
// User.introduce(u);
