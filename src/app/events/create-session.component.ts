import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ISession } from "./shared/event.model";

@Component({
  selector: "create-session",
  templateUrl: "./create-session.component.html"
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter<ISession>();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
    this.presenter = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.level = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
      this.restrictedWords(["foo", "bar"])
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  private restrictedWords(words) {
    return (formControl: FormControl): { [key: string]: any } => {
      if (!words) return null;
      var invalidWords = words
        .map(w => (formControl.value.includes(w) ? w : null))
        .filter(w => w != null);
      return formControl.value.includes("foo")
        ? { restrictedWords: invalidWords.join(",") }
        : null;
    };
  }

  saveSession(formValues) {
    console.log(formValues);
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }
}
