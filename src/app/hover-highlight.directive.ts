import {Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[dirHoverHighlight]'
})
export class HoverHighlightDirective {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };
  @Input() defaultColor = 'white';
  @Input('hoverHighlight') highlightColor = 'red';
  private backgroundColor = this.defaultColor;

  constructor() { }

}
