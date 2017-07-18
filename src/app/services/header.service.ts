import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

	private title: string;

  constructor() { }

	getTitle(): string {
		return this.title
	};  

	setTitle(title): void {
		this.title = title;
	};  	 

}
