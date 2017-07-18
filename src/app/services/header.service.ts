import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

	private title: string;

  constructor() { }

	public getTitle(): string {
		return this.title
	};  

	public setTitle(title): void {
		this.title = title;
	};  	 

}
