import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

	private articles: any[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/articles')
        .map((response: Response) => JSON.parse(response.json()))
        .subscribe(data => {
        		//console.log(data);
            this.articles = data;
        });  	
  }

}
