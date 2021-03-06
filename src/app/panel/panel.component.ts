import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setTitle('Статистика');
  }  

  private detailsPageRecord: Object = {}; 
  private showDetailsPage: Boolean = false; 
  private records: Object;  
  private limits: Object;   

  private setVisibilityDetailsPage(visibility) {
    //console.log(visibility);
    this.showDetailsPage = visibility;
  };

  private setDetailsPage(obj) {
    this.setVisibilityDetailsPage(obj.visibility);
    this.detailsPageRecord = obj.record;
  };

  private setRenderData(obj) {   
    this.records = obj.records;
    this.limits = obj.limits;
  }

  private showErrorMessage(message): void {
    alert("Некорректный период даты");
  };

}
