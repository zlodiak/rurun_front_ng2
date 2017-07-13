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
  @Output() onShowDetails = new EventEmitter<boolean>();

  showDetails() {
  	console.log('show details');
  	this.onShowDetails.emit(true);
  }

}
