import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  disableButton: Boolean = true;
  serverCreated: string = 'Server is not created';
  serverName: string = 'shahrukh';
  serverStatus: string = 'Offline';
  serverNewName = '';
  constructor() { 
    setTimeout(()=>{
      this.disableButton = false;
    }, 2000)
  }

  ngOnInit() {
  }

  createNewServer() {
    this.serverCreated = 'Server was created';
  }

}
