import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  
  eventsData: any;
  constructor(private service: MarvelService) {}

  ngOnInit(): void {
    this.service.getEvents().subscribe(
      (res) => {
        this.eventsData = res.data.results;
        console.log(this.eventsData);
      },
      (error) => {}
    );
  }
 
}
