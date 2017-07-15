import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	@Input() articleObj: Object;
  @Output() onClickBackBtn = new EventEmitter<Boolean>();

  private back(): void {
  	this.onClickBackBtn.emit();
  };

}
