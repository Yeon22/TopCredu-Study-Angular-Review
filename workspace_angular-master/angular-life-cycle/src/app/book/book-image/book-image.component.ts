import { Component, OnInit, Input, Output, EventEmitter }
  from '@angular/core';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.css']
})
export class BookImageComponent implements OnInit {
  // 부모가 자식에게 전달한 값
  @Input() path = "./assets/image/img001.jpg";
  @Input() title = "제목";
  @Input() width = "100";
  @Input() height = "150";

  // 노드의 EventEmitter가 아닌 앵귤러의 EventEmitter 이다.(사용법이 약간 다름)
  // 자식이 부모에게 전달하는 파라미터
  @Output() selectBook = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(name: string) {
    this.selectBook.emit(name);
    // 자식 컴포넌트가 부모 컴포넌트에게 파라미터를 전달한다.
    // 이벤트 에미터 객체인 변수명 selectBook을 키로 사용하고
    // name 변수의 값을 전달한다.
  }
}
