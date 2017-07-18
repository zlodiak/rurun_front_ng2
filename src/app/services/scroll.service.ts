import { Injectable } from '@angular/core';

@Injectable()
export class ScrollService {

  constructor() { }

  private scrollTop: number;

  public setScrollTop(scrollTop): void {
  	this.scrollTop = scrollTop;
  };

  public getScrollTop(): number {
  	return this.scrollTop;
  };  

  public moveScrollTop(idElem, scrollTop): void {
		document.getElementById(idElem).scrollTop = scrollTop;
  };

  public findScrollTop(idElem): number {
		return document.getElementById(idElem).scrollTop;
  };  

}
