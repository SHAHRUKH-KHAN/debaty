import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-if',
  templateUrl: './simple-if.component.html',
  styleUrls: ['./simple-if.component.css']
})
export class SimpleIfComponent implements OnInit {

  showMessage: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  display() {
    this.showMessage = true;
  }

}
