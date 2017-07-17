import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private headerTitle: string;

  private handlerClickMenu(sidenav: any, headerTitle: string) {
  	this.headerTitle = headerTitle;
		sidenav.close();
  };
}
