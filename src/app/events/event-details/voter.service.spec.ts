import { VoterService } from '../shared/voter.service';
import { of } from 'rxjs/observable/of';
import { ISession } from '../shared/event.model';

describe('VoterService', () => {
  let voterService: VoterService, mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters', () => {
      var session = { id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVote(3, <ISession>session, 'joe');
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with the right url', () => {
      var session = { id: 9, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVote(9, <ISession>session, 'joe');
      expect(mockHttp.delete).toHaveBeenCalledWith(
        '/api/events/9/sessions/9/voters/joe'
      );
    });
  });
  describe('addVoter', () => {
    it('should call http.post with the right url', () => {
      var session = { id: 9, voters: ['john'] };
      mockHttp.post.and.returnValue(of(false));

      voterService.addVote(9, <ISession>session, 'joe');
      expect(mockHttp.post).toHaveBeenCalledWith(
        '/api/events/9/sessions/9/voters/joe',
        {},
        jasmine.any(Object)
      );
    });
  });
});
