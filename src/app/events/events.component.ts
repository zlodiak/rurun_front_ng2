import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

	private events: Object;
	private dates: Object;
	private selectedTab: number = 0;
	private minTab: number = 0;
	private maxTab: number;

  constructor(private eventsService: EventsService, private headerService: HeaderService) { }

  ngOnInit() {
 		this.fillEvents();
 		this.fillDates();
    this.headerService.setTitle('События');
  }

  private fillEvents(): void {
    this.eventsService
        .getEvents()
        .subscribe(data => {
          this.events = JSON.parse(data.json());
          //console.log(this.events);
        });   	
  };

  private fillDates(): void {
    this.eventsService
        .getDates()
        .subscribe(data => {
          this.dates = JSON.parse(data.json());
          this.maxTab = Object.keys( this.dates ).length - 1;
          //console.log(this.dates );
        }); 
  };

  private onSwipeRight(event: any) {
  	if(this.selectedTab > this.minTab) {
  		this.selectedTab--;
  	}
  }

  private onSwipeLeft(event: any) {
  	if(this.selectedTab < this.maxTab) {
  		this.selectedTab++;
  	}  	
  }  

}
