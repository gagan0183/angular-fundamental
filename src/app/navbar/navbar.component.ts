import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";

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
  constructor(private authService: AuthService) {
  }
}
