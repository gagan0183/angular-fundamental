import { Component } from "@angular/core";

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
    `
  ]
})
export class NavbarComponent {}
