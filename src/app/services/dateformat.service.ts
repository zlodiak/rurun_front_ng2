import { Injectable } from '@angular/core';

@Injectable()
export class DateformatService {

  constructor() { }

  private formDateFullToDateTime(date) {
  	// from 2017-07-08T16:39:33Z
  	// to 	{date: 2017-07-08, time: 16:39:33, timeWithoutSeconds: 16:39}
  	let strings = date.split('T');
  	let result = {
  		date: strings[0],
  		time: strings[1].slice(0, -1),
  		timeWithoutSeconds: strings[1].slice(0, -4)
  	};

  	return result;
  }

}
