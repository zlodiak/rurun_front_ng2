import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { config } from '../app.config';


@Injectable()
export class ArticlesService {

  constructor(private http: Http) { };

  getArticles(): Observable<any> {
  	let result = this.http.get(config.host + 'articles');
  	//console.log('result', result);
  	return result;
  }   

}
