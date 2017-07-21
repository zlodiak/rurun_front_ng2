import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { config } from '../app.config';

@Injectable()
export class GuestbookService {

  constructor(private http: Http){ };

  createMessage(obj):Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
		let params = new URLSearchParams();

		params.set('name', obj.name.trim());
		params.set('message', obj.message.trim());
		
		return this.http.post(config.host + 'guestbook/message_create', params.toString(), { headers: headers });
  };

}
