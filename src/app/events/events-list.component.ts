import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <event-thumbnail
      #thumbnail
      [event]="event"
      (eventEmitter)="handle($event)"
    ></event-thumbnail>
    <h3>{{ thumbnail.someProperty }}</h3>
    <button (click)="thumbnail.template('this')">Template</button>
  `
})
export class EventsListComponent {
  event = {
    id: 1,
    name: "Angular connect",
    date: "9/26/2039",
    time: "10:00 am",
    price: 59.99,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "England"
    }
  };

  handle(data) {
    console.log(data);
  }
}
