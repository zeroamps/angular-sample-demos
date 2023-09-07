import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example05',
  templateUrl: './example05.component.html'
})
export class Example05Component {
  form: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.form = this._builder.group({
      firstName: this._builder.control('', Validators.required),
      lastName: this._builder.control('', Validators.required),
      email: this._builder.control('', Validators.required),
      hobbies: this._builder.array([
        this._builder.group({
          name: this._builder.control(''),
          description: this._builder.control('')
        })
      ])
    });
  }

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  insert() {
    this.hobbies.push(
      this._builder.group({
        name: this._builder.control(''),
        description: this._builder.control('')
      })
    );
  }

  delete(index: number) {
    this.hobbies.removeAt(index);
  }

  submit(): void {
    this.form.markAllAsTouched();
  }
}
