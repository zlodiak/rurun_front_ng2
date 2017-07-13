import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() record: Object;
  @Output() onClickBackBtn = new EventEmitter<Boolean>();

  back() {
  	this.onClickBackBtn.emit(false);
  }

}
