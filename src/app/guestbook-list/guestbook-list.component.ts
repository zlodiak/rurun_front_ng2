import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { GuestbookService } from '../services/guestbook.service';


@Component({
  selector: 'app-guestbook-list',
  templateUrl: './guestbook-list.component.html',
  styleUrls: ['./guestbook-list.component.css']
})
export class GuestbookListComponent implements OnInit {

	private articles: any[];

  constructor(private guestbookService: GuestbookService) { };

  ngOnInit() {
  	this.getMessages();
  }

  private getMessages(): void {
    this.guestbookService
        .getMessages()
        .map((response: Response) => JSON.parse(response.json()))
        .subscribe(data => {
        						this.addUnixDatePropToObj(data);
                    this.articles = data;
                    console.log(this.articles);
                  }, 
                  err => {
                    console.log('err')         
                  });    
  };  

  private addUnixDatePropToObj(dataObj): void {
    let unixTimeStamp: Number;
    let changedObj: Object;

    for(let prop in dataObj) {
      if (!dataObj.hasOwnProperty(prop)) continue;

      unixTimeStamp = parseInt((new Date(dataObj[prop].fields.created_date).getTime() / 1000).toFixed(0));
      //console.log(unixTimeStamp)

      dataObj[prop].create_date_unix = unixTimeStamp;
    }
  };  

}
