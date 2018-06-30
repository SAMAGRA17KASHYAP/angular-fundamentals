import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';

@Injectable()
export class CheckDirtyStateService implements CanDeactivate<CreateEventComponent>{

  constructor() { }

  canDeactivate(component : CreateEventComponent){
    if(component.isDirty){
      return window.confirm("Are you sure you want to leave?");
    }
    return true;
  }

}
