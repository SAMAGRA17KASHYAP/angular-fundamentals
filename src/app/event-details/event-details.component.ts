import { Component, OnInit } from '@angular/core';
import { EventService } from '../Shared/event.service';
import {  ActivatedRoute, Params } from '@angular/router';
import { ISession } from '../models/event.model';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:any;

  filterBy:string = 'all';

  addMode:boolean;

  sortBy:string='name';

  constructor(private eventService:EventService,private router:ActivatedRoute) { }

  ngOnInit() {

    this.router.data.forEach((data)=>{
        this.event = data['event'];
    });
   
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

  filterByFunc(filterBy:string){
    this.filterBy = filterBy;    
  }
}
