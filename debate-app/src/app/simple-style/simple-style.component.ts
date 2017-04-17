import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-style',
  templateUrl: './simple-style.component.html',
  styleUrls: ['./simple-style.component.css']
})
export class SimpleStyleComponent implements OnInit {
  status: String = '';
  constructor() { }

  ngOnInit() {
  }

  getStatusColor() {
    this.status = Math.random() > 0.5  ? 'Online' : 'Offline';
    return this.status === 'Online' ? 'green' : 'red';
  }

}
