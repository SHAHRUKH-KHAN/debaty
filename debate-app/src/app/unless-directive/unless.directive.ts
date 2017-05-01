import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

//This is a structural directive
/*To do this we need access to template and the view where
  we render this directive. Both will need a injection
*/

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    //This is a dynamic property, which will trigger the actions
    if(!condition) {
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private tempRef: TemplateRef<any>, 
    private vcRef: ViewContainerRef) { }

}
