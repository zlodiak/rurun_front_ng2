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

  private showDetailsPage: Boolean = false;
  private modelDateBegin: Object;  
  private modelDateEnd: Object;  
  private records: Object;  
  private data: Object;   
  private slides: Object = {
    'pulse_avg_bpm': undefined,
    'pulse_max_bpm': undefined,
    'training_time_min': undefined
  }; 
  private limits: Object = {
    'pulse_avg_bpm_upper': 0,
    'pulse_avg_bpm_lower': 0,
    'pulse_max_bpm_upper': 0,
    'pulse_max_bpm_lower': 0,
    'training_time_min_upper': 0,
    'training_time_min_lower': 0
  };   

  displayStatistic() {
    this.recordsService
        .getRecords(this.modelDateBegin['epoc'], this.modelDateEnd['epoc'])
        .subscribe(data => {
          this.records = JSON.parse(data.json());
          console.log(typeof this.records, this.records);
        });
  }

  toggleSlideVisibility(index) {
    this.slides[index] = !this.slides[index];
  }

  stopPropagator(ev) {
    ev.stopPropagation();
  };

  setDetailsPage(val) {
     console.log('set details', val);
     this.showDetailsPage = true;
  };

}
