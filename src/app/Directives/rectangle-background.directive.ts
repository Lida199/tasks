import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRectangleBackground]',
})
export class RectangleBackgroundDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseover') onMouseover() {
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
