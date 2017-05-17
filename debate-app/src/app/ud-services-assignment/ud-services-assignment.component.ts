import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
   selector: 'app-ud-services-component',
   templateUrl:'./ud-services-assignment.component.html'
})

export class UdServicesAssignmentComponent implements OnInit{

    activeToInactive: number;
    inActiveToActive: number;

    constructor(private usersService: UsersService, 
        private counterService: CounterService){
    }

    ngOnInit() {
        this.activeToInactive = this.counterService.activeToInActiveCounter;
        this.inActiveToActive = this.counterService.inActiveToActiveCounter;
    }
}