import { Input } from '@angular/core';

export class UsersService {

	activeUsers: [string]=['shahrukh', 'rekha'];
    inactiveUsers: [string]=['hitasha', 'akansha'];

    @Input() users: string[];
	
	constructor() {}
}