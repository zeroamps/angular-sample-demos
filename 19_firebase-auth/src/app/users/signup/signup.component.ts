import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY } from 'rxjs';

import { ErrorsService } from '../../errors/errors.service';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.component.html'
})
export class SignUpComponent {
  form: FormGroup;

  constructor(fb: FormBuilder, private auth: AuthService, private errorHandler: ErrorsService) {
    this.form = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  signUp() {
    if (this.form.valid) {
      this.auth
        .signUp(this.form.get('email')!.value, this.form.get('password')!.value)
        .pipe(
          catchError((error) => {
            this.errorHandler.error$.next(error);
            return EMPTY;
          })
        )
        .subscribe();
    }
    this.form.markAllAsTouched();
  }
}
