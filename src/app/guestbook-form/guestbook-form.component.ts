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
  	if(!this.name.trim() || !this.message.trim()) {
  		this.clearFields();
  		return
  	};

  	this.guestbookService
	  	.createMessage({
	  		name: this.name,
	  		message: this.message
	  	})
			.subscribe(data => {
        let res = JSON.parse(data.json());
        console.log(res);
        if(res.status == '1') {
        	this.showOkModal("Спасибо!");
        	this.clearFields();
        } else if(res.status == '0') {
        	this.showErrorModal(res.error_message);
        };
      },
    	err => {
        //console.log('err')         
      });  
  };

  private isDisabled(): Boolean {
  	let result = false;

  	if(!this.name || !this.message) {
  		result = true;
  	};

  	return result;
  };

  private showOkModal(headTitle): void {
    alert(headTitle + ' ' + "Сообщение отправлено."); 	
  };

  private showErrorModal(headTitle): void {
    alert(headTitle + ' ' + "Произошла ошибка. Сообщение не отправлено.");  	
  };  

  private clearFields(): void {
  	this.name = '';
  	this.message = '';
  };

}
