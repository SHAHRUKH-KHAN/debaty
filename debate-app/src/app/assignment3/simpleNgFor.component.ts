import { Component } from '@angular/core';

@Component({
    selector: 'simple-ng-for',
    templateUrl:'./simpleNgFor.component.html',
})


export class SimpleNgFor {
    items = [];

    addItems() {
        this.items.push('I am Added');
    }
}