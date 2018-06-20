import { Component, OnInit } from '@angular/core';
import { BoardServiceService } from './board-service.service';
import { Board } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boards: Array<Board>;
  errorMessage: string;

  constructor(private boardService: BoardServiceService) { }

  ngOnInit() {

  }

  show() {
    this.boardService.getBoards().subscribe(
      (boards) => { // 성공 콜백
        console.log(boards);
        this.boards = boards;
      },
      (errorMessage) => { // 실패 콜백
        alert(errorMessage);
      }
    );
  }

  removeBoard(board: Board) {
    this.boardService.removeBoard(board).subscribe(
      boards => {
        var idx = this.boards.findIndex((e) => e.id === board.id);
        this.boards.splice(idx, 1);
      }, error => this.errorMessage = <any>error);

      return false;
  }

}
