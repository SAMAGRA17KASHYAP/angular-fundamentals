import { Component, OnInit } from '@angular/core';
import { EventService } from '../Shared/event.service';
import {  ActivatedRoute } from '@angular/router';
import { ISession } from '../models/event.model';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:any;

  addMode:boolean;

  constructor(private eventService:EventService,private router:ActivatedRoute) { }

  ngOnInit() {
    let id = +this.router.snapshot.params["id"];
    this.event = this.eventService.getEvent(id);
  }

  addSessions(){
    this.addMode = true;
  }

  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null,this.event.sessions.map(s=>s.id));
    session.id = nextId+1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode =false;
  }

  cancel(){
    this.addMode =false;
  }
}
