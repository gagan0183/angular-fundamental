import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import {
  EventsListComponent,
  EventThumbnail,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './user/auth.service';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './routes';
import { Error404Component } from './errors/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQUERY_TOKEN } from './common/jQuery.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { VoterService } from './events/shared/voter.service';
import { LocationValidate } from './events/shared/location-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { EventResolver } from './events/event-resolver.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnail,
    EventDetailsComponent,
    NavbarComponent,
    UpvoteComponent,
    CreateEventComponent,
    ModalTriggerDirective,
    CreateSessionComponent,
    Error404Component,
    SessionListComponent,
    LocationValidate,
    SimpleModalComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jQuery },
    AuthService,
    VoterService,
    { provide: 'pass', useValue: state },
    EventResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function state(component: CreateEventComponent) {
  console.log('this');
  if (component.isState) {
    return window.confirm('Do you really want to cancel this');
  }
  return false;
}
