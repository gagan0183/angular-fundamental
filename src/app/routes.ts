import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventDetailRouteActivator } from "./events/event-details/event-detail.routeactivator";

export const APP_ROUTES: Routes = [
  { path: "event/new", component: CreateEventComponent },
  { path: "events", component: EventsListComponent },
  {
    path: "event/:id",
    component: EventDetailsComponent,
    canActivate: [EventDetailRouteActivator]
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "events", pathMatch: "full" }
];
