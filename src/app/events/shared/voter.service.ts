import { Injectable } from '@angular/core';
import { ISession } from './event.model';

@Injectable()
export class VoterService {
  deleteVote(session: ISession, username: string) {
    if (session.voters.indexOf(username) > 0) {
      session.voters.splice(session.voters.indexOf(username), 1);
    }
  }

  addVote(session: ISession, username: string) {
    if (session.voters.indexOf(username) === -1) {
      session.voters.push(username);
    }
  }

  userHasVoted(session: ISession, username: string) {
    return session.voters.indexOf(username) > 0 ? true : false;
  }
}
