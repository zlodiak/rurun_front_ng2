import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { config } from '../app.config';


@Injectable()
export class EventsService {

  constructor(private http: Http) { }

	getEvents(): Observable<any> {
		let result = this.http.get(config.host + 'event/events');
		//console.log('result', result);
		return result;
	} 

	getDates(): Observable<any> {
		let result = this.http.get(config.host + 'event/dates');
		//console.log('result', result);
		return result;
	} 	

}
