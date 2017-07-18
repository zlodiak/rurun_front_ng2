import { Component } from '@angular/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private headerTitle: string;

  constructor(private headerService: HeaderService) { }

  private handlerClickMenu(sidenav: any, headerTitle: string) {
		sidenav.close();
  };
}
