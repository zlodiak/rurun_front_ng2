import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrollArrow]'
})
export class ScrollArrowDirective {

  constructor() { };

  @HostListener('click', ['$event']) 
  onClick() {
  	document.getElementById('content').scrollTop = 0;
  };

}
