import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private active: ActivatedRoute, 
    private route:Router) { }

  ngOnInit() {
  }

  showActivatedRoute() {
    //this.route.navigate(['users'], {relativeTo: this.active})
  }

}
