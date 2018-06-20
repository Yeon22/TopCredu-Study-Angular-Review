import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Kpop } from './kpop.model';

// 옵져버블 객체에 동적으로 toPromise 자원을 등록하는
// polyfill 작업을 수행한다.
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KpopHttpService {

  constructor(private http: Http) { }

  getIdols(): Promise<any> {
    // return this.http.get('./assets/server/kpop.json') -> 옵져버블 객체를 return 한다.
    // .toPromise(); -> Observavle 객체를 Promise 객체로 변경한 후 리턴한다.
    return this.http.get('./assets/server/kpop.json') // 앞에 도메인이 자동으로 붙기 때문에 생략이 가능하다.
      .toPromise();
  }
}
