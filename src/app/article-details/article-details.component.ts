import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { ScrollService } from '../services/scroll.service';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  @Input() articleObj: Object;
  @Output() onClickBackBtn = new EventEmitter<number>();  

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollService.moveScrollTop('content', 0);
  }

  private back(): void {
    let scrollTop = this.scrollService.getScrollTop();
  	this.onClickBackBtn.emit(scrollTop);
  };

}
