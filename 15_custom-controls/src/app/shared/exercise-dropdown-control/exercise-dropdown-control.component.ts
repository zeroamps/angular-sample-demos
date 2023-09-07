import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

import { Exercise } from '@app/core/models';
import { Category } from './category.interface';

@Component({
  selector: 'app-exercise-dropdown-control',
  templateUrl: './exercise-dropdown-control.component.html',
  styleUrls: ['./exercise-dropdown-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ExerciseDropdownControlComponent
    }
  ]
})
export class ExerciseDropdownControlComponent implements OnInit, ControlValueAccessor {
  @Input() exercises: Exercise[];
  categories: Category[];
  selected: Exercise;

  @ViewChild(NgbDropdown)
  private dropdown: NgbDropdown;
  private touched = false;
  private disabled = false;

  ngOnInit() {
    this.selected = this.exercises[0];
    this.categories = this.exercises.reduce((groups: Category[], exercise) => {
      for (const item of exercise.categories) {
        let category = groups.find((category) => category.name === item);

        if (!category) {
          category = { name: item, exercises: [] };
          groups.push(category);
        }

        category.exercises.push(exercise);
      }

      return groups;
    }, []);
  }

  writeValue(id: string) {
    this.selected = this.exercises.find((exercise) => exercise.id === id) ?? this.exercises[0];
  }

  private onChange = (id: string) => {};
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  private onTouched = () => {};
  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  private markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  select(exercise: Exercise) {
    this.markAsTouched();
    if (!this.disabled) {
      this.dropdown.close();
      this.selected = exercise;
      this.onChange(exercise.id);
    }
  }
}
