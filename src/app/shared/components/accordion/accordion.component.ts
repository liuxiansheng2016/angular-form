import { Component, Input, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {
  @ContentChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;
  @Input() multiple = false;

  openItem(index: number): void {
    this.items.forEach((item, i) => {
      if (this.multiple || index === i) {
        item.isOpen = index === i;
      } else {
        item.isOpen = false;
      }
    });
  }
}