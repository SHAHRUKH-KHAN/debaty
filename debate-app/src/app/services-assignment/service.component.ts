import {Component} from '@angular/core';

@Component({
    selector: 'app-service-component',
    templateUrl: './service.component.html'
})

export class ServiceComponent {

    addedItems = [];
    constructor() {}

    updateListItem(data) {
        this.addedItems.push(data);
    }
}