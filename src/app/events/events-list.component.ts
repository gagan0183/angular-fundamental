import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.activatedRoute.snapshot.data["events"];
  }
}
