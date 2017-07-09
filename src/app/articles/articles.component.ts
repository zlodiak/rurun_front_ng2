import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
import * as _ from 'underscore';
import { RecordsService } from '../records.service';
import { PaginatorService } from '../services/paginator.service'


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private http: Http, private paginatorService: PaginatorService) { }

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
      this.http.get('http://127.0.0.1:8000/articles')
          .map((response: Response) => JSON.parse(response.json()))
          .subscribe(data => {
          		console.log(data);

              // set items to json response
              this.allItems = data;

              // initialize to page 1
              this.setPage(1);
          });
  }

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      // get pager object from service
      this.pager = this.paginatorService.getPager(this.allItems.length, page);

      // get current page of items
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}