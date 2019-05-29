import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from "../shared/event.service";
import { Injectable } from "@angular/core";

@Injectable()
export class EventDetailRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(activatedRoute: ActivatedRouteSnapshot) {
    let iseventPresent: boolean = !!this.eventService.getEvent(
      +activatedRoute.params["id"]
    );
    if (!iseventPresent) {
      this.router.navigate(["/404"]);
    }
    return iseventPresent;
  }
}
