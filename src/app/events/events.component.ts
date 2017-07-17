import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

	private events: Object;
	private dates: Object;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
 		this.fillEvents();
 		this.fillDates();
  }

  private fillEvents(): void {
    this.eventsService
        .getEvents()
        .subscribe(data => {
          this.events = JSON.parse(data.json());
          console.log(this.events);
        });   	
  };

  private fillDates(): void {
    this.eventsService
        .getDates()
        .subscribe(data => {
          this.dates = JSON.parse(data.json());
          //console.log(this.dates);
        }); 
  };

}
