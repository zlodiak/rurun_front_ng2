import { Component } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RuRun';

  test() {
	  let rs = _.map([1, 2, 3], function(num){ return num * 3; });
		console.log(rs);
  };

}
