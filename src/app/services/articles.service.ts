import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ArticlesService {

  constructor(private http: Http) { };

  getArticles(): Observable<any> {
  	let result = this.http.get('http://127.0.0.1:8000/articles');
  	//console.log('result', result);
  	return result;
  }   

}
