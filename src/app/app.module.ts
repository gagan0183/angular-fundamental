import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EventsAppComponent } from "./events-app.component";
import {
  EventsListComponent,
  EventThumbnail,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventDetailRouteActivator,
  EventListResolver
} from "./events/index";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./routes";
import { Error404Component } from "./errors/404.component";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnail,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [
    EventService,
    EventDetailRouteActivator,
    { provide: "pass", useValue: state },
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function state(component: CreateEventComponent) {
  console.log("this");
  if (component.isState) {
    return window.confirm("Do you really want to cancel this");
  }
  return false;
}
