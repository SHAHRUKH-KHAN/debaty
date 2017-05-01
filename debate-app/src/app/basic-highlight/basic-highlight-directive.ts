import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'  //its a attribute; so in square brackets
})

// Directive won't have a  template
export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'blue';
    }
}