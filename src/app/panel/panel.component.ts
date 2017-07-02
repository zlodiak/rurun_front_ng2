import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  private myDatePickerOptions: IMyDpOptions = {
      // other options...
      dateFormat: 'dd.mm.yyyy',
  };

  // Initialized to specific date (09.10.2018).
  /*private modelDateBegin: Object = { date: { year: 2018, month: 10, day: 9 } };  
  private modelDateEnd: Object = { date: { year: 2018, month: 10, day: 19 } };  */
  private modelDateBegin: Object;  
  private modelDateEnd: Object;  

	constructor() { }

	ngOnInit() {
	}

  displayStatistic() {
    console.log(JSON.stringify(this.modelDateBegin['epoc']), JSON.stringify(this.modelDateBegin['epoc']));
  }

}
