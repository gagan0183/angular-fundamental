import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
    <div>
      <h1>Angular events</h1>
      <hr />
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
        <button class="btn btn-primary" (click)="handle()">Handle</button>
      </div>
    </div>
  `,
  styles: [
    `
      .pad-left {
        padding-left: 10px;
      }
    `
  ]
})
export class EventThumbnail {
  @Input() event;
  @Output() eventEmitter = new EventEmitter();
  someProperty: string = "property";

  handle() {
    this.eventEmitter.emit(this.event.name);
  }

  template(p) {
    console.log(p);
  }
}
