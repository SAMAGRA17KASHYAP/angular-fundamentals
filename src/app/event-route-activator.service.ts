import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './Shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate{

  constructor(private router:Router, private eventService: EventService) { }

  canActivate(route:ActivatedRouteSnapshot){
    let infoExists = !!this.eventService.getEvent(+route.params["id"]);
    if(!infoExists){
      this.router.navigate(["/404"]);
    }
    return infoExists;
  }

}
