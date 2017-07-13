import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() renderData: Object;
  @Input() limitsData: Object;
  @Output() onShowDetailsPage = new EventEmitter<Object>();

  showDetails(record) {
  	console.log('show details', record);
  	this.onShowDetailsPage.emit({
      visibility: true,
      record: record
    });
  }

}
