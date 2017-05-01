import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css']
})
export class Assignment5Component implements OnInit {

  timer: number;
  evenCounter = [];
  oddCounter = [];
  constructor() { }

  ngOnInit() {
  }

  updateView(event) {
    this.timer = event.count;
    if(this.timer % 2 === 0) {
      this.evenCounter.push(this.timer);
    }
    else {
      this.oddCounter.push(this.timer);
    }

  }

}
