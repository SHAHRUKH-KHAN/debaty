import { Component } from '@angular/core';

@Component({
   selector: 'app-ud-services-component',
   templateUrl:'./ud-services-assignment.component.html'
})

export class UdServicesAssignmentComponent {

    activeUsers: [string]=['shahrukh', 'rekha'];
    inactiveUsers: [string]=['hitasha', 'akansha'];

    constructor(){}

    addToInActive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    addToActive(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }
}