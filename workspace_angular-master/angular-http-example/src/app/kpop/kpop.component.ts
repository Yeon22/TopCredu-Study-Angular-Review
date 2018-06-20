import { Component, OnInit } from '@angular/core';

import { KpopHttpService } from './kpop-http.service';
import { Kpop } from './kpop.model';

@Component({
  selector: 'app-kpop',
  templateUrl: './kpop.component.html',
  styleUrls: ['./kpop.component.css']
})
export class KpopComponent implements OnInit {
  idols: Kpop[];

  constructor(private kpopHttpService: KpopHttpService) { }

  ngOnInit() {
    this.kpopHttpService.getIdols() // 여기까지가 Promise객체이기 때문에 .then함수를 사용할 수 있음.
      .then(res => {
        console.log(res);
        console.log('-----------------');
        console.log(res.json().info.idols);
        return res.json().info.idols;
      })
      .then(idols => {
        console.log('===========');
        console.log(idols);
        this.idols = idols;
      });
  }
}
