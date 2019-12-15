import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[changeText]'
})
export class ChangetextDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText = 'Hi guys!!!, This text is coming from directive';
   }

}
