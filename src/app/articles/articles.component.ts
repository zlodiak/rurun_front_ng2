import { Component, OnInit } from '@angular/core';
 
import { ArticlesListComponent } from '../articles-list/articles-list.component';
import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private showArticleDetails: Boolean = false;
  private articleObj: Object;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setTitle('Заметки');
  }

  private setVisibilityDetailsPage(val):void {
    this.showArticleDetails = val;
  }  

  private handlerClickArticleTeaser(articleObj) {
    //console.log(articleObj);
    this.articleObj = articleObj;
    this.setVisibilityDetailsPage(true);
  };

}
