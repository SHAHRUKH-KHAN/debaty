> unless you let angular know that the a file exists, it wont know which file to inlude.
> So including them in app.component.ts is mandatory

@Component({
  >selector: 'app-root', declaring using it as a ELEMENT
  >selector: '[app-root]', declaring using it as a ATTRIBUTE
  >selector: '.app-root', declaring using it as a CLASS
  >selectors - id does not work in angular.
})

Component styling -- we are using http://valor-software.com/ngx-bootstrap/#/alerts