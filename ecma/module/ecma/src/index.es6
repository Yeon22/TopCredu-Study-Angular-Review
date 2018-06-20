// ECMA가 제안하는 표준 모듈 방식
// 표준 기술이지만 노드는 인정하지 않는다.
// 노드 컴파일러가 인정하는 CommonsJS 방식으로 문법코드를 변경한 후 실행해야 한다.
// 바벨같은 트랜스파일러 기술을 사용하여 코드를 변경한다.
import say from './hello'; // 할당 문법

say();