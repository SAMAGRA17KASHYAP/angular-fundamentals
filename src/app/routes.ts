import { EventsListComponent } from "./events-list/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import{Routes} from "@angular/router";
import { CreateEventComponent } from "./create-event/create-event.component";
import { _404Component } from "./errors/404/404.component";
import { EventRouteActivatorService } from "./event-route-activator.service";
import { EventListResolverService } from "./shared/event-list-resolver.service";
import { CheckDirtyStateService } from "./check-dirty-state.service";
import { CreateSessionComponent } from "./create-session/create-session.component";
import { EventResolverService } from "./event-resolver.service";
export const appRoutes:Routes = [

    {path:'404',component:_404Component},
    {path:'events/new',component:CreateEventComponent,canDeactivate:[CheckDirtyStateService]},
    {path:'events/sessions/new',component:CreateSessionComponent},
    {path:'events',component:EventsListComponent,resolve:{events:EventListResolverService}},   
    {path:'events/:id',component:EventDetailsComponent,resolve:{event:EventResolverService}},
    {path:'',redirectTo:'events',pathMatch:'full'},
    {path:'user',loadChildren:'app/user/user.module#UserModule'}
];