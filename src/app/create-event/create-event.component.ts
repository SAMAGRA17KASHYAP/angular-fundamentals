import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../Shared/event.service';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  newEvent

  isDirty:boolean=true;

  constructor(private router:Router,private eventService:EventService) { }

  ngOnInit() {
  }

  cancel(){
    this.router.navigate(['/events']);
  }
  saveEvent(formValues){
    this.eventService.saveEvent(formValues);
    this.router.navigate(["/events"]);
  }
}
