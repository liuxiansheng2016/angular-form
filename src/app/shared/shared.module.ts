import { NgModule } from '@angular/core';
import { AccordionItemComponent } from './components/accordion/accordion-item/accordion-item.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AccordionItemComponent,
    AccordionComponent,
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    AccordionItemComponent,
    AccordionComponent
  ]
})
export class SharedModule { }