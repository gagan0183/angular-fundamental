import { Directive, ElementRef, Inject, OnInit, Input } from "@angular/core";
import { JQUERY_TOKEN } from "./jQuery.service";

@Directive({
  selector: "[modal-trigger]"
})
export class ModalTriggerDirective implements OnInit {
  @Input("modal-trigger") elementId: string;
  private el: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener("click", e => {
      this.$(`#${this.elementId}`).modal({});
    });
  }
}
