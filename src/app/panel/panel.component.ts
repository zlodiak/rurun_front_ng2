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

  private detailsPageRecord: Object = {}; 
  private showDetailsPage: Boolean = false; 
  private records: Object;  
  private limits: Object;  

  setVisibilityDetailsPage(visibility) {
    console.log(visibility);
    this.showDetailsPage = visibility;
  };

  setDetailsPage(obj) {
    this.setVisibilityDetailsPage(obj.visibility);
    this.detailsPageRecord = obj.record;
  };

  setRenderData(obj) {
    this.records = obj.records;
    this.limits = obj.limits;
  }

}
