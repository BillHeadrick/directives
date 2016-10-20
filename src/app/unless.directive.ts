//a custom directive that is the exact opposite of ngIf
//attaches if the condition is false
import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
  @Input() set unless(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
