import {Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  //attribute selector = highlight, it could be an #highlight for an id selector or .highlight for class
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
