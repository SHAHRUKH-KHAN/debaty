import { Input, Output, EventEmitter } from '@angular/core';

export class UsersService {

	activeUsers: [string]=['shahrukh', 'rekha'];
    inactiveUsers: [string]=['hitasha', 'akansha'];

	@Output() changeStatusToInactive = new EventEmitter<number>();
	@Output() changeStatusToActive = new EventEmitter<number>();
	constructor() {}
}