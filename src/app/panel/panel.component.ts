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

  private modelDateBegin: Object;  
  private modelDateEnd: Object;  
  private records: Object;  
  private data: Object;    

  displayStatistic() {
    this.recordsService
        .getRecords(this.modelDateBegin['epoc'], this.modelDateBegin['epoc'])
        .subscribe(data => this.records = data.json());
  }

}
