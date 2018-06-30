import { Component, OnInit } from '@angular/core';
import { EventService } from '../Shared/event.service';
import { ToastrService } from '../toastr.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  private events:any;

  constructor(private eventService:EventService, private toastr:ToastrService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
  }



}
