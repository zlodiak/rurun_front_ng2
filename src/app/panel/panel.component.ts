import { Component, OnInit, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private popup:Popup, private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setTitle('Статистика');
  }  

  private detailsPageRecord: Object = {}; 
  private showDetailsPage: Boolean = false; 
  private records: Object;  
  private limits: Object;  

  @ViewChild('popupErrorDates') popupErrorDates: Popup;  

  private setVisibilityDetailsPage(visibility) {
    console.log(visibility);
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
    //alert(message);
    this.popupErrorDates.show({
        header: "Ошибка!",
        color: "#f00", // red, blue.... 
        widthProsentage: 40, // The with of the popou measured by browser width 
        animationDuration: 1, // in seconds, 0 = no animation 
        showButtons: true, // You can hide this in case you want to use custom buttons 
        confirmBtnContent: "OK2", // The text on your confirm button 
        cancleBtnContent: "OK", // the text on your cancel button 
        confirmBtnClass: "btn btn-default hide-element", // your class for styling the confirm button 
        cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
        animation: "bounceIn" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
    });
  };

}
