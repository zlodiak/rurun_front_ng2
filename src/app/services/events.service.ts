import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EventsService {

  constructor(private http: Http) { }

	getEvents(): Observable<any> {
		let result = this.http.get('http://127.0.0.1:8000/event/events');
		//console.log('result', result);
		return result;
	} 

	getDates(): Observable<any> {
		let result = this.http.get('http://127.0.0.1:8000/event/dates');
		console.log('result', result);
		return result;
	} 	

}
