import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { SessionListComponent } from "./session-list.component";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "../shared/voter.service";
import { ISession } from "../../user/user.model";
import { By } from "@angular/platform-browser";

describe("SessionListComponent", () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {};
    let mockVoterService = {};

    TestBed.configureTestingModule({
      imports: [],
      declarations: [SessionListComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  it("should have the correct session title", () => {
    component.sessions = [
      {
        id: 1,
        name: "session 1",
        presenter: "p",
        duration: 1,
        level: "beginner",
        abstract: "abstract",
        voters: ["p"]
      }
    ];
    component.filterBy = "all";
    component.sortBy = "name";
    component.eventId = 9;

    component.ngOnChanges();
    fixture.detectChanges();

    expect(element.querySelector("[well-title]").textContent).toContain(
      "session 1"
    );
  });
});
