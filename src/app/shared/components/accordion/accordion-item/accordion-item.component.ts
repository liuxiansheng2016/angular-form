import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {
  @Input() title = '';
  @Input() isOpen = true;

  @HostBinding('class.open') get openClass(): boolean {
    return this.isOpen;
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}