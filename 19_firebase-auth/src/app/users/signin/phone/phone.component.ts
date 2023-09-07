import { Component, OnInit } from '@angular/core';
import { ConfirmationResult, RecaptchaVerifier } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY } from 'rxjs';

import { ErrorsService } from '../../../errors/errors.service';
import { AuthService } from '../../auth.service';

@Component({
  templateUrl: './phone.component.html'
})
export class PhoneComponent implements OnInit {
  formPhone: FormGroup;
  formCode: FormGroup;
  confirmationResult!: ConfirmationResult;
  private recaptchaVerifier!: RecaptchaVerifier;

  constructor(fb: FormBuilder, private auth: AuthService, private errorHandler: ErrorsService) {
    this.formPhone = fb.group({
      phone: fb.control('', [Validators.required])
    });

    this.formCode = fb.group({
      code: fb.control('', [Validators.required])
    });
  }

  ngOnInit() {
    this.recaptchaVerifier = this.auth.createRecaptchaVerifier();
  }

  signIn() {
    if (this.formPhone.valid) {
      this.auth
        .signInWithPhoneNumber(this.formPhone.get('phone')!.value, this.recaptchaVerifier)
        .pipe(
          catchError((error) => {
            this.errorHandler.error$.next(error);
            return EMPTY;
          })
        )
        .subscribe((confirmationResult) => (this.confirmationResult = confirmationResult));
    }
    this.formPhone.markAllAsTouched();
  }

  verify() {
    if (this.formCode.valid) {
      this.auth
        .confirmPhoneNumber(this.confirmationResult, this.formCode.get('code')!.value)
        .pipe(
          catchError((error) => {
            this.errorHandler.error$.next(error);
            return EMPTY;
          })
        )
        .subscribe();
    }
    this.formCode.markAllAsTouched();
  }
}
