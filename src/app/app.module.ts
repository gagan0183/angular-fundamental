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

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnail,
    EventDetailsComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
