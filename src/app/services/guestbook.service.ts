import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { config } from '../app.config';

@Injectable()
export class GuestbookService {

  constructor(private http: Http){ };

  createMessage(obj):Observable<any> {
    const message = JSON.stringify(obj);
     
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
     
    return this.http.post(config.host + 'guestbook/message_create', message, { headers: headers });
  };

}
