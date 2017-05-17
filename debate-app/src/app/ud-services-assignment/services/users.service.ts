import { CounterService } from './counter.service';

import { Input, Output, EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class UsersService {

	activeUsers: [string]=['shahrukh', 'rekha'];
    inactiveUsers: [string]=['hitasha', 'akansha'];

	constructor(private counterService: CounterService) {}

	addToInActive(id:number){
        this.counterService.incrementActiveToInActive();
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    addToActive(id:number){
        this.counterService.incrementInActiveToActive();
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }
}