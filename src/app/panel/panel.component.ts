import { Component, OnInit } from '@angular/core';

import { IMyDpOptions } from 'mydatepicker';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private recordsService: RecordsService) { }

  ngOnInit() {
  }  

  private myDatePickerOptions: IMyDpOptions = {
      // other options...
      dateFormat: 'dd.mm.yyyy',
  };

  // Initialized to specific date (09.10.2018).
  /*private modelDateBegin: Object = { date: { year: 2018, month: 10, day: 9 } };  
  private modelDateEnd: Object = { date: { year: 2018, month: 10, day: 19 } };  */
  private modelDateBegin: Object;  
  private modelDateEnd: Object;  
  private records: String;  

  displayStatistic() {
    console.log(JSON.stringify(this.modelDateBegin['epoc']), JSON.stringify(this.modelDateBegin['epoc']));
    this.records = this.recordsService.getRecords();
    console.log(this.records);
  }

}
