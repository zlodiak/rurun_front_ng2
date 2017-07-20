import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-guestbook-form',
  templateUrl: './guestbook-form.component.html',
  styleUrls: ['./guestbook-form.component.css']
})
export class GuestbookFormComponent implements OnInit {

	private name: string = '';
	private message: string = '';

  constructor() { }

  ngOnInit() {
  }

  private submit(): void {

  };

  private isDisabled(): Boolean {
  	let result = false;

  	if(!this.name || !this.message) {
  		result = true;
  	};

  	return result;
  };

}
