import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

// Subject - Observable : JS, 밑에 Java와 같은 개념
// Publisher(이벤트 방출) - Subscriber(구독) : Java

@Injectable()
export class CounterBridgeService {

  private subject = new Subject<any>();

  constructor() { }

  incremnet() {
    // 파라미터는 구독신청(subscribe)함수에 전달된 콜백함수를 호출하면서 전달된다.
    // next함수를 호출하면 subscribe 콜백함수의 파라미터로 한다.
    this.subject.next({ type: 'incremnet' });
  }

  decrement() {
    this.subject.next({ type: 'decrement' });
  }

  // Subject객체로부터 Observable객체를 얻어다가 구독자(CounterDisplayComponent)에게 전달한다.
  // 구독자 = 화면을 표시하는 디스플레이
  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
