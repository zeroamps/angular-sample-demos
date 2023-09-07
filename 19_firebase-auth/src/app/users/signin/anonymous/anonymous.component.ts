import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';

import { ErrorsService } from '../../../errors/errors.service';
import { AuthService } from '../../auth.service';

@Component({
  templateUrl: './anonymous.component.html'
})
export class AnonymousComponent {
  constructor(private auth: AuthService, private errorHandler: ErrorsService) {}

  signIn() {
    this.auth
      .signInAnonymously()
      .pipe(
        catchError((error) => {
          this.errorHandler.error$.next(error);
          return EMPTY;
        })
      )
      .subscribe();
  }
}
