import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecordsService {

  constructor(private http: Http){ }

  getRecords(dateBeginUnix, dateEndUnix): Observable<any> {
  	//console.log(dateBeginUnix, dateEndUnix);
  	let result = this.http.get('http://127.0.0.1:8000/days/' + dateBeginUnix + '/' + dateEndUnix);
  	//console.log('result', result);
  	return result;
  } 

}
