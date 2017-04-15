import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  name:string = '';
  disableReset: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  valueCheck = function(event) {
    this.disableReset = event.target.value === '' ? true: false;
  }

  reset = () => {
    this.name = '';
    this.disableReset = true;
  }

}
