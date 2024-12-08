import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() jsonData: any = {};
  dynamicForm: FormGroup = new FormGroup({});
  dynamicControls: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      !changes['jsonData'].firstChange && changes.hasOwnProperty('jsonData') && changes['jsonData'].currentValue
    ) {
      this.dynamicControls = this.parseControls(changes['jsonData'].currentValue);
      this.dynamicForm = this.generateForm(changes['jsonData'].currentValue);
    }
  }

  private generateForm(data: any): FormGroup {
    const group: any = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        if (Array.isArray(value)) {
          group[key] = this.generateArray(value);
        } else if (typeof value === 'object') {
          group[key] = this.generateForm(value);
        } else {
          group[key] = new FormControl(value);
        }
      }
    }
    return this.fb.group(group);
  }

  private generateArray(data: any[]): FormArray | FormControl {
    if (data.every((item) => typeof item === 'object')) {
      const controls = data.map((item) => this.generateForm(item));
      return this.fb.array(controls);
    } else {
      return new FormControl(data);
    }
  }

  private parseControls(data: any): any[] {
    const controls: any[] = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        if (Array.isArray(value)) {
          const isObjectArray = value.every((item) => typeof item === 'object');
          if (isObjectArray) {
            controls.push({
              type: 'array',
              label: key,
              controls: value.map((item) =>
                typeof item === 'object'
                  ? this.parseControls(item)
                  : { type: 'text', label: null, value: item }
              ),
            });
          } else {
            controls.push({
              type: 'text-array',
              label: key,
              value,
            });
          }
        } else if (typeof value === 'object') {
          controls.push({
            type: 'group',
            label: key,
            controls: this.parseControls(value),
          });
        } else if (typeof value === 'boolean') {
          controls.push({
            type: 'checkbox',
            label: key,
            value,
          });
        } else {
          controls.push({
            type: 'text',
            label: key,
            value,
          });
        }
      }
    }
    return controls;
  }

  handleSubmit(): void {
    console.log('Form Submitted:', this.dynamicForm.value);
  }
}
