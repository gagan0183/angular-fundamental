import { Injectable } from '@angular/core';
import { ISession } from './event.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class VoterService {
  constructor(private http: HttpClient) {}
  deleteVote(eventId: number, session: ISession, username: string) {
    if (session.voters.indexOf(username) > 0) {
      session.voters.splice(session.voters.indexOf(username), 1);
      const url = `/api/events/${eventId}/sessions/${
        session.id
      }/voters/${username}`;
      this.http
        .delete(url)
        .pipe(catchError(this.handleError('addVote')))
        .subscribe();
    }
  }

  addVote(eventId: number, session: ISession, username: string) {
    if (session.voters.indexOf(username) === -1) {
      session.voters.push(username);

      const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      const url = `/api/events/${eventId}/sessions/${
        session.id
      }/voters/${username}`;
      this.http
        .post(url, {}, options)
        .pipe(catchError(this.handleError('addVote')))
        .subscribe();
    }
  }

  userHasVoted(session: ISession, username: string) {
    return session.voters.indexOf(username) > 0 ? true : false;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
