import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IMyDpOptions } from 'mydatepicker';
import { RecordsService } from '../records.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private recordsService: RecordsService) { }

  ngOnInit() {
  }

  private modelDateBegin: Object;  
  private modelDateEnd: Object;  
  private records: Object;  
  private data: Object;   

  private myDatePickerOptions: IMyDpOptions = {
      dateFormat: 'dd.mm.yyyy',
  };

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

  @Output() onSubmitFilter = new EventEmitter<Object>();

  submitFilter() {
    this.recordsService
        .getRecords(this.modelDateBegin['epoc'], this.modelDateEnd['epoc'])
        .subscribe(data => {
          this.records = JSON.parse(data.json());
          this.onSubmitFilter.emit({
          	records: this.records,
          	limits: this.limits
          });
        });
  }

  toggleSlideVisibility(index) {
    this.slides[index] = !this.slides[index];
  }

  stopPropagator(ev) {
    ev.stopPropagation();
  };    

}
