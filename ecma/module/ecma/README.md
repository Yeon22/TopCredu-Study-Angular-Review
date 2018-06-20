# package.json
노드가 제안하는 디펜던시 관리 파일
추가로 자주 사용하는 명령어의 앨리어스를 등록할 수 있다.
노드 모듈로 등록시 프로젝트, 개발자 정보를 제공한다.

다음 명령으로 package.json 파일을 쉽게 만들 수 있다.

```
npm init -y
```

바벨 트랜스파일러를 로컬 컴퓨터에 설치한다.
babel 이라는 명령어로 트랜스파일링 작업을 수행할 수 있다.

```
npm install -g babel-cli
```

트랜스파일링 작업시 사용하는 라이브러리를 설치한다.
node_modeuls 폴더 밑으로 디펜던시가 설치된다.
```
npm i --save-dev babel-preset-env
```

바벨 환경설정 파일을 만든다.
.babelrc
```
{
  "only" : ["*.es6"],
  "presets" : ["env"],
  "ignore" : ["node_modules", "build"]
}
```

~.es6 확장자로 만든 파일을 저장할 때 자동으로 트랜스파일링이 처리된다.
