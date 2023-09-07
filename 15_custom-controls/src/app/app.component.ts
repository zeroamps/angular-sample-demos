import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ExercisesService } from '@app/core/data';
import { Exercise } from '@app/core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  exercises: Exercise[];

  constructor(private _formBuilder: FormBuilder, private _exercisesService: ExercisesService) {
    this.form = this._formBuilder.group({
      exercise: this._formBuilder.control('bf371801-a3cb-4f78-ac69-46e585f5360b')
    });

    this.exercises = this._exercisesService.findAll();
  }
}
