import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart" [style.color]="iconcolor"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val) {
    console.log(val);
    this.iconcolor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconcolor: string;

  onClick() {
    this.vote.emit({});
  }
}
