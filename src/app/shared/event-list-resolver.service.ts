import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from '../Shared/event.service';
import 'rxjs/add/operator/map';


@Injectable()
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService:EventService) { }

  resolve(){
    return this.eventService.getEvents().map(events=>events);
  } 

}
