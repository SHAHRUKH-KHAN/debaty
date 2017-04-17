> unless you let angular know that the a file exists, it wont know which file to inlude.
> So including them in app.component.ts is mandatory

@Component({
  >selector: 'app-root', declaring using it as a ELEMENT
  >selector: '[app-root]', declaring using it as a ATTRIBUTE
  >selector: '.app-root', declaring using it as a CLASS
  >selectors - id does not work in angular.
})

Component styling -- we are using http://valor-software.com/ngx-bootstrap

#Angular directives
  *ngIf --> condition check; Structural Directive (other is attribute directive)
            asterisk(*) is there to tell Angular that it will change the structure of the
            DOM.
            check it here - [https://angular.io/docs/ts/latest/api/common/index/NgIf-directive.html]
  
  ngStyle --> adding styles to your DOM
              check it here - [https://angular.io/docs/ts/latest/api/common/index/NgStyle-directive.html]
            
  ngClass --> adding classes to your DOM
              check it here -
              [https://angular.io/docs/ts/latest/api/common/index/NgClass-directive.html]
  
  ngFor