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
      dateFormat: 'dd.mm.yyyy',
  };

  private modelDateBegin: Object;  
  private modelDateEnd: Object;  
  private records: Object;  
  private data: Object;    

  displayStatistic() {
    this.recordsService
        .getRecords(this.modelDateBegin['epoc'], this.modelDateEnd['epoc'])
        .subscribe(data => {
          this.records = JSON.parse(data.json());
          console.log(typeof this.records, this.records);
        });
  }

}
