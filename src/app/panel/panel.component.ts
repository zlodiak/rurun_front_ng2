import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }  

  private showDetailsPage: Boolean = false; 
  private records: Object;  
  private limits: Object;  

  setDetailsPage(val) {
     this.showDetailsPage = true;
  };

  setRenderData(obj) {
    this.records = obj.records;
    this.limits = obj.limits;
  }

}
