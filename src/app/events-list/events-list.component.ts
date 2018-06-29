import { Component, OnInit } from '@angular/core';
import { EventService } from '../Shared/event.service';
import { ToastrService } from '../toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  private events:any;

  constructor(private eventService:EventService, private toastr:ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents(); 
  }


  handleEvent(eventName):void{
    this.toastr.success(eventName);
  }

}
