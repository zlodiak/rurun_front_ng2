import { Component, OnInit } from '@angular/core';

import { GuestbookService } from '../services/guestbook.service';


@Component({
  selector: 'app-guestbook-form',
  templateUrl: './guestbook-form.component.html',
  styleUrls: ['./guestbook-form.component.css']
})
export class GuestbookFormComponent implements OnInit {

	private name: string = '';
	private message: string = '';

  constructor(private guestbookService: GuestbookService) {  }

  ngOnInit() {
  }

  private submit(): void {
  	this.guestbookService
	  	.createMessage({
	  		name: this.name,
	  		message: this.message
	  	})
			.subscribe(data => {
        let res = JSON.parse(data.json());
        console.log(res);
      },
    	err => {
        console.log('err')         
      });  
  };

  private isDisabled(): Boolean {
  	let result = false;

  	if(!this.name || !this.message) {
  		result = true;
  	};

  	return result;
  };

}
