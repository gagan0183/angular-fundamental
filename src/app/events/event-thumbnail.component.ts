import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
    <div>
      <div class="well hoverwell thumbnail">
        <h2>{{ event.name }}</h2>
        <div>Date: {{ event.date }}</div>
        <div>Time: {{ event.time }}</div>
        <div>Price: {{ event.price | currency }}</div>
        <div>
          <span>Location: {{ event.location.address }}</span>
          <span class="pad-left"
            >{{ event.location.city }}, {{ event.location.country }}</span
          >
        </div>
      </div>
    </div>
  `,
  styles: [
    `
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
