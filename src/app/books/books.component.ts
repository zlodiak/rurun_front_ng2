import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
import * as _ from 'underscore';
import { RecordsService } from '../records.service';
import { Pager } from '../pager'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private http: Http, private pagerService: Pager) { }

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
      // get dummy data
      this.http.get('https://raw.githubusercontent.com/cornflourblue/angular2-pagination-example/master/dummy-data.json')
          .map((response: Response) => response.json())
          .subscribe(data => {
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
      this.pager = this.pagerService.getPager(this.allItems.length, page);

      // get current page of items
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
