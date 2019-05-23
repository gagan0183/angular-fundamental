import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent {
  events = {
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
}
