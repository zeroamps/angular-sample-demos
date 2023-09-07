import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';

import { ErrorsService } from '../../errors/errors.service';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent {
  constructor(private auth: AuthService, private errorHandler: ErrorsService) {}

  facebook() {
    this.auth
      .signInWithFacebook()
      .pipe(
        catchError((error) => {
          this.errorHandler.error$.next(error);
          return EMPTY;
        })
      )
      .subscribe();
  }

  google() {
    this.auth
      .signInWithGoogle()
      .pipe(
        catchError((error) => {
          this.errorHandler.error$.next(error);
          return EMPTY;
        })
      )
      .subscribe();
  }

  microsoft() {
    this.auth
      .signInWithMicrosoft()
      .pipe(
        catchError((error) => {
          this.errorHandler.error$.next(error);
          return EMPTY;
        })
      )
      .subscribe();
  }

  github() {
    this.auth
      .signInWithGithub()
      .pipe(
        catchError((error) => {
          this.errorHandler.error$.next(error);
          return EMPTY;
        })
      )
      .subscribe();
  }

  twitter() {
    this.auth
      .signInWithTwitter()
      .pipe(
        catchError((error) => {
          this.errorHandler.error$.next(error);
          return EMPTY;
        })
      )
      .subscribe();
  }
}
