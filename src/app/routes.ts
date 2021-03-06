import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent
} from './events/index';
import { Error404Component } from './errors/404.component';
import { EventResolver } from './events/event-resolver.service';

export const APP_ROUTES: Routes = [
  {
    path: 'event/new',
    component: CreateEventComponent,
    canDeactivate: ['pass']
  },
  {
    path: 'event/session/new',
    component: CreateSessionComponent
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: 'event/:id',
    component: EventDetailsComponent,
    resolve: { event: EventResolver }
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  }
];
