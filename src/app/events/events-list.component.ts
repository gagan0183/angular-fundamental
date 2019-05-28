import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
  selector: "events-list",
  template: `
    <div class="row">
      <event-thumbnail
        #thumbnail
        *ngFor="let event of events"
        [event]="event"
      ></event-thumbnail>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
