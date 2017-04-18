import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {

  displayText: Boolean = false;
  logs = [];
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.counter = (this.counter || 0) + 1;
    this.logs.push(this.counter);
    this.displayText = !this.displayText;
  }

  getBColor(index) {
    if(this.logs.length >= 5 && index >=4) {
      return 'blue';
    }
  }

}
