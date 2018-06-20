import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Board } from './board';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BoardServiceService {
  private url: string = "http://localhost:8080/boards";
  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: Http) { }

  getBoards(): Observable<Board[]> {
    return this.http.get(this.url)
      .map((res) => {
        // console.log('res = ' + JSON.stringify(res));
        let json = res.text();
        json = JSON.parse(json);
        return json || []; // 배열로 리턴
      })
      .catch((res) => {
        // console.log(res);
        return Observable.throw(res.json().error || 'Server Down');
      }
    );
  }

  removeBoard(board): Observable<Board[]> {
    const url = `${this.url}/${board.id}`;

    return this.http.delete(url, { headers: this.headers })
      .map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let json = res.text();
    json = JSON.parse(json);
    return json || [];
  }

  private handleError(res: Response) {
    return Observable.throw(res.json().error || 'Server Down');
  }
}
