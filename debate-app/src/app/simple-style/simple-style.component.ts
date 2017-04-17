import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-style',
  templateUrl: './simple-style.component.html',
  styleUrls: ['./simple-style.component.css']
})
export class SimpleStyleComponent implements OnInit {
  status: String = '';
  constructor() { 
    this.status = Math.random() > 0.5  ? 'Online' : 'Offline';
  }

  ngOnInit() {
  }

  getStatus():String {
    return this.status;
  }

  getStatusColor():String {
    return this.status === 'Online' ? 'green' : 'red';
  }

}
