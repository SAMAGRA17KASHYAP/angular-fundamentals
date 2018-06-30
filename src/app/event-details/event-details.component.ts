import { Component, OnInit } from '@angular/core';
import { EventService } from '../Shared/event.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:any;

  constructor(private eventService:EventService,private router:ActivatedRoute) { }

  ngOnInit() {
    let id = +this.router.snapshot.params["id"];
    this.event = this.eventService.getEvent(id);
  }

}
