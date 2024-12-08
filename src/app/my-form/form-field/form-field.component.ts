import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() control: any;
  @Input() parentGroup = new FormGroup({});

  ngOnInit(): void {
  }

}