import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RecordsService } from '../records.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private modelDateBegin: string;  
  private modelDateEnd: string;  
  private records: Object;  
  private data: Object;    

  constructor(private recordsService: RecordsService) { 

  }

  ngOnInit() {
    let filterValues = sessionStorage.getItem('filterValues');

    if(filterValues) {
      let filterValuesObj = JSON.parse(filterValues);
      console.log(filterValuesObj);

      this.modelDateBegin = '' + filterValuesObj.dateBegin.trim();
      this.modelDateEnd = '' + filterValuesObj.dateEnd.trim();
      this.limits = filterValuesObj.limits;
      this.slides = filterValuesObj.slides;

      console.log(typeof this.modelDateBegin, this.modelDateBegin, this.modelDateBegin.length);
      console.log(typeof this.modelDateEnd, this.modelDateEnd, this.modelDateEnd.length);
      }
    
  }

 

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

  private submitFilter() {
    let modelDateBeginUnix = Date.parse(this.modelDateBegin)/1000;
    let modelDateEndUnix = Date.parse(this.modelDateEnd)/1000;
    let modelDateBeginFormatted = this._getFormattedDate(new Date(modelDateBeginUnix * 1000));
    let modelDateEndFormatted = this._getFormattedDate(new Date(modelDateEndUnix * 1000));    

    this.recordsService
        .getRecords(modelDateBeginUnix, modelDateEndUnix)
        .subscribe(data => {
          this.records = JSON.parse(data.json());

          this.onSubmitFilter.emit({
          	records: this.records,
          	limits: this.limits
          });

          this.putFilterValuestToSessionStorage(this.limits, 
                                                modelDateBeginFormatted, 
                                                modelDateEndFormatted, 
                                                this.slides);
        });
  }

  private toggleSlideVisibility(index) {
    this.slides[index] = !this.slides[index];
  }

  private stopPropagator(ev) {
    ev.stopPropagation();
  };    

  private putFilterValuestToSessionStorage(limits, dateBegin, dateEnd, slides) {
    let obj = {
      limits: this.limits,
      dateBegin: dateBegin,
      dateEnd: dateEnd,
      slides: slides
    };

    let objStr = JSON.stringify(obj);

    sessionStorage.setItem('filterValues', objStr);
  }

  private _getFormattedDate(date) {
      let dd   = date.getDate();
      let mm   = date.getMonth() + 1; //January is 0!
      let yyyy = date.getFullYear();

      if(dd < 10)  { dd = '0' + dd } 
      if(mm < 10)  { mm = '0' + mm } 

      let result = dd + '.' + mm + '.' + yyyy;

    console.log(date, result)

      return result;
  }  

}
