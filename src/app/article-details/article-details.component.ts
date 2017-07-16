import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  @Input() articleObj: Object;
  @Output() onClickBackBtn = new EventEmitter<Boolean>();  

  constructor() { }

  ngOnInit() {
    this.scrollToTop();
  }

  private back(): void {
  	this.onClickBackBtn.emit();
  };

  private scrollToTop(): void {
    let el = document.getElementById('content');
    el.scrollTop = 0;
  };

}
