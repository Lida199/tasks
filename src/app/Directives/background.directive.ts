import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  @Input() status!: 'Deleted' | 'Active' | 'Inactive';
  constructor(private element: ElementRef) {}
  ngOnInit() {
    switch (this.status) {
      case 'Active': {
        this.element.nativeElement.style.backgroundColor = 'green';
        break;
      }
      case 'Inactive': {
        this.element.nativeElement.style.backgroundColor = 'blue';
        break;
      }
      case 'Deleted': {
        this.element.nativeElement.style.backgroundColor = 'red';
        break;
      }
    }
  }

  @HostListener('click') onClick() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.color = 'black';
    switch (this.status) {
      case 'Active': {
        this.element.nativeElement.querySelector(
          'button'
        ).style.backgroundColor = 'green';
        break;
      }
      case 'Inactive': {
        this.element.nativeElement.querySelector(
          'button'
        ).style.backgroundColor = 'blue';
        break;
      }
      case 'Deleted': {
        this.element.nativeElement.querySelector(
          'button'
        ).style.backgroundColor = 'red';
        break;
      }
    }
  }
}
