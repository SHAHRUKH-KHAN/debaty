import { UsersService } from '../ud-services-assignment/services/users.service';

import { Component } from '@angular/core';

@Component({
   selector: 'app-ud-services-component',
   templateUrl:'./ud-services-assignment.component.html'
})

export class UdServicesAssignmentComponent {

    constructor(private usersService: UsersService){
    }

    activeUsers: [string] = this.usersService.activeUsers;
    inactiveUsers: [string] = this.usersService.inactiveUsers;

    addToInActive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    addToActive(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }
}