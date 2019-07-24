import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
  templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
  isState: boolean = true;
  newEvent: IEvent;
  constructor(private router: Router, private eventService: EventService) {}
  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isState = false;
      this.router.navigate(['/events']);
    });
  }
}
