import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ScrollService } from '../services/scroll.service';
import { ArticlesService } from '../services/articles.service';


@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  private articles: any[];
	private filterText: string;

  @Output() onClickArticleTeaser = new EventEmitter<Object>();

  constructor(private http: Http, 
              private scrollService: ScrollService, 
              private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  private openArticleDetails(articleObj): void {
    let teasersScrollTop = this.scrollService.findScrollTop('content');
    this.scrollService.setScrollTop(teasersScrollTop);
  	this.onClickArticleTeaser.emit(articleObj);
  }  

  private addUnixDatePropToObj(dataObj): Object {
    let unixTimeStamp: Number;
    let changedObj: Object;

    for(let prop in dataObj) {
      if (!dataObj.hasOwnProperty(prop)) continue;

      unixTimeStamp = parseInt((new Date(dataObj[prop].fields.created_date).getTime() / 1000).toFixed(0));
      //console.log(unixTimeStamp)

      dataObj[prop].create_date_unix = unixTimeStamp;
    }

    return dataObj;
  };

  private getArticles(): void {
    this.articlesService
        .getArticles()
        .map((response: Response) => JSON.parse(response.json()))
        .subscribe(data => {
                      let changedDataObj = this.addUnixDatePropToObj(data);
                      //console.log(changedDataObj);
                      this.articles = data;
                  }, 
                  err => {
                    //console.log('err')         
                  });    
  };

}
