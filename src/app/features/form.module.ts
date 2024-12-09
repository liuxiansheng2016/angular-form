// src/app/my-form/my-form.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormComponent } from './my-form/dynamic-form/dynamic-form.component';
import { FormFieldComponent } from './/my-form/form-field/form-field.component';
import { SelectFormComponent } from './select-form/select-form.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    FormFieldComponent,
    SelectFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule 
  ],
  exports: [
    DynamicFormComponent,
    FormFieldComponent,
    SelectFormComponent
  ]
})
export class MyFormModule { }