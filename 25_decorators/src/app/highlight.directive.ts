import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {}

  @Input() set appHighlight(color: string) {
    if (color) {
      this.elementRef.nativeElement.style.backgroundColor = color;
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
  }
}
