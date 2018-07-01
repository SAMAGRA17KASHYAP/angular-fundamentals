import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventService } from './Shared/event.service';
import { ToastrService } from './toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { _404Component } from './errors/404/404.component';
import { EventRouteActivatorService } from './event-route-activator.service';
import { EventListResolverService } from './shared/event-list-resolver.service';
import { CheckDirtyStateService } from './check-dirty-state.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { CollapsibleWellComponent } from './Shared/collapsible-well/collapsible-well.component';
import { DurationPipe } from './Shared/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DurationPipe,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    _404Component,
    CreateSessionComponent,
    SessionsListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    ToastrService, 
    EventRouteActivatorService,
    EventListResolverService,
    CheckDirtyStateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm("Are you sure you want to leave?");
  }
  return true;
}