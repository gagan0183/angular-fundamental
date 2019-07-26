import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('Session list', () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'beginner' },
        { name: 'session 9', level: 'intermediate' }
      ];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 9;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });

    it('should sort the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 9', level: 'beginner' },
        { name: 'session 2', level: 'intermediate' }
      ];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 9;

      component.ngOnChanges();

      expect(component.visibleSessions[2]).toBe('session 9');
    });
  });
});
