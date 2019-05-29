import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";

export const APP_ROUTES: Routes = [
  { path: "event/new", component: CreateEventComponent },
  { path: "events", component: EventsListComponent },
  { path: "event/:id", component: EventDetailsComponent },
  { path: "", redirectTo: "events", pathMatch: "full" }
];
