import { Component, OnInit } from '@angular/core';
 
import { ArticlesListComponent } from '../articles-list/articles-list.component';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private showArticleDetails: Boolean = false;

  constructor() { }

  ngOnInit() {

  }

}
