import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnail } from "./events/event-thumbnail.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { EventService } from "./events/shared/event.service";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./routes";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventDetailRouteActivator } from "./events/event-details/event-detail.routeactivator";

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
    { provide: "pass", useValue: state }
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
