import {
  Component, Input,
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent
  // implements OnChanges, OnInit, DoCheck,
  // AfterContentInit, AfterContentChecked,
  // AfterViewInit, AfterViewChecked, OnDestroy
  {
  title = 'ParentComponent';
  shouldShow = true;

  constructor() {
    console.log('>>> ParentComponent # constructor() called. #0');
  }

  // 외부에서 파라미터를 전달했을 때만 기동한다.
  // ngOnChanges(changes) {
  //   console.log('>>> ParentComponent # ngOnChanges() called. #1');
  // }
  //
  // ngOnInit() {
  //   console.log('>>> ParentComponent # ngOnInit() called. #2');
  // }
  //
  // ngDoCheck() {
  //   console.log('>>> ParentComponent # ngDoCheck() called. #3');
  // }
  //
  // ngAfterContentInit() {
  //   console.log('>>> ParentComponent # ngAfterContentInit() called. #4');
  // }
  //
  // ngAfterContentChecked() {
  //   console.log('>>> ParentComponent # ngAfterContentChecked() called. #5');
  // }
  //
  // ngAfterViewInit() {
  //   console.log('>>> ParentComponent # ngAfterViewInit() called. #6');
  // }
  //
  // ngAfterViewChecked() {
  //   console.log('>>> ParentComponent # ngAfterViewChecked() called. #7');
  // }
  //
  // ngOnDestroy() {
  //   console.log('>>> ParentComponent # ngOnDestroy() called. #8');
  // }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
