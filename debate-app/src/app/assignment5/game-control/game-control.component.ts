import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<{count: number}>();
  counter:number = 0;
  intervalReference;
  constructor() { }

  ngOnInit() {
  }

  startGame() {
    clearInterval(this.intervalReference);
    this.intervalReference = setInterval(()=>{
      this.counter ++;
      this.gameStarted.emit({count: this.counter});
    },1000);
    
  }

  stopGame() {
    clearInterval(this.intervalReference);
  }


}
