import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
    <div>
      <div class="well hoverwell thumbnail" [routerLink]="['/event', event.id]">
        <h2>{{ event?.name }}</h2>
        <div>Date: {{ event?.date }}</div>
        <div
          [ngClass]="{ green: event?.time === '8:00 am' }"
          [ngSwitch]="event?.time"
        >
          Time: {{ event?.time }}
          <span *ngSwitchCase="'8:00 am'">(Early start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late start)</span>
          <span *ngSwitchDefault>(Normal start)</span>
        </div>
        <div>Price: {{ event?.price | currency }}</div>
        <div [hidden]="!event?.location">
          <span>Location: {{ event?.location?.address }}</span>
          <span class="pad-left"
            >{{ event?.location?.city }}, {{ event?.location?.country }}</span
          >
        </div>
        <div *ngIf="event?.onl">online: {{ event?.onl }}</div>
      </div>
    </div>
  `,
  styles: [
    `
      .green {
        color: #003300;
      }
      .thumbnail {
        background-color: #1e3259;
        color: #fff';
      }
      .pad-left {
        padding-left: 10px;
      }
    `
  ]
})
export class EventThumbnail {
  @Input() event;
  someProperty: string = "property";
}
