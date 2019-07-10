import { Component, Input } from "@angular/core";

@Component({
  selector: "collapsible-well",
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select=".title"></ng-content>
      </h4>
      <ng-content *ngIf="visible" select=".body"></ng-content>
    </div>
  `,
  styles: [
    `
      .well {
        background-color: transparent;
      }
    `
  ]
})
export class CollapsibleWellComponent {
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
