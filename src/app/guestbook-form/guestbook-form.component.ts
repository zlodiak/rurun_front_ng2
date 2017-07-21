import { Component, OnInit, ViewChild } from '@angular/core';

import { GuestbookService } from '../services/guestbook.service';
import { Popup } from 'ng2-opd-popup';


@Component({
  selector: 'app-guestbook-form',
  templateUrl: './guestbook-form.component.html',
  styleUrls: ['./guestbook-form.component.css']
})
export class GuestbookFormComponent implements OnInit {

	private name: string = '';
	private message: string = '';

  @ViewChild('popup_ok') popup_ok: Popup;
  @ViewChild('popup_error') popup_error: Popup;  	

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
    this.popup_ok.show({
      header: headTitle,
      color: "blue", // red, blue.... 
      widthProsentage: 40, // The with of the popou measured by browser width 
      animationDuration: 1, // in seconds, 0 = no animation 
      showButtons: true, // You can hide this in case you want to use custom buttons 
      confirmBtnContent: "OK2", // The text on your confirm button 
      cancleBtnContent: "OK", // the text on your cancel button 
      confirmBtnClass: "btn btn-default hide-element", // your class for styling the confirm button 
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
      animation: "bounceIn" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
    })  	
  };

  private showErrorModal(headTitle): void {
    this.popup_error.show({
      header: headTitle,
      color: "red", // red, blue.... 
      widthProsentage: 40, // The with of the popou measured by browser width 
      animationDuration: 1, // in seconds, 0 = no animation 
      showButtons: true, // You can hide this in case you want to use custom buttons 
      confirmBtnContent: "OK2", // The text on your confirm button 
      cancleBtnContent: "OK", // the text on your cancel button 
      confirmBtnClass: "btn btn-default hide-element", // your class for styling the confirm button 
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
      animation: "bounceIn" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
    })  	
  };  

  private clearFields(): void {
  	this.name = '';
  	this.message = '';
  };

}
