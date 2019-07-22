import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { EventService } from "../events/shared/event.service";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styles: [
    `
      .navbar {
        background-color: #1e3259;
      }
      .navbar a {
        color: #fff;
      }
      li > a.active {
        color: #a71299;
      }
    `
  ]
})
export class NavbarComponent {
  searchTerm: string = "";
  foundSessions: ISession[] = [];
  constructor(
    private authService: AuthService,
    private eventService: EventService
  ) {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
