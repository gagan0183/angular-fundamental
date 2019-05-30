import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventDetailRouteActivator } from "./events/event-details/event-detail.routeactivator";
import { EventListResolver } from "./events/event-list-resolver.service";
import { UserModule } from "./user/user.module";

export const APP_ROUTES: Routes = [
  {
    path: "event/new",
    component: CreateEventComponent,
    canDeactivate: ["pass"]
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: "event/:id",
    component: EventDetailsComponent,
    canActivate: [EventDetailRouteActivator]
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "events", pathMatch: "full" },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(mod => mod.UserModule)
  }
];
