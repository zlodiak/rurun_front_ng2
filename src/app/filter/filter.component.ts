import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RecordsService } from '../records.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private recordsService: RecordsService) { 

  }

  ngOnInit() {
    
  }
 
  private modelDateBegin: string;  
  private modelDateEnd: string;  
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

  @Output() onSubmitFilter = new EventEmitter<Object>();
  @Output() onErrorFilter = new EventEmitter<string>();

  private submitFilter() {
    let modelDateBeginUnix = Date.parse(this.modelDateBegin)/1000;
    let modelDateEndUnix = Date.parse(this.modelDateEnd)/1000;   

    this.recordsService
        .getRecords(modelDateBeginUnix, modelDateEndUnix)
        .subscribe(data => {
          this.records = JSON.parse(data.json());

          this.onSubmitFilter.emit({
          	records: this.records,
          	limits: this.limits
          });
        }, 
        err => {
          console.log('err')
          this.onErrorFilter.emit();          
        });
  }

  private toggleSlideVisibility(index) {
    this.slides[index] = !this.slides[index];
  }

  private stopPropagator(ev) {
    ev.stopPropagation();
  };    

}
