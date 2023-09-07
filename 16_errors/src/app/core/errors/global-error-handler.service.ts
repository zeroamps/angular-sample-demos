import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  private _modal: NgbModal | undefined;
  private _errors: any[] = [];

  constructor(private _injector: Injector, private _ngZone: NgZone) {}

  handleError(error: any) {
    this._ngZone.run(() => {
      console.error(error);

      if (error instanceof HttpErrorResponse) {
        this._errors.push(JSON.stringify(error));
      } else {
        this._errors.push(error);
      }

      if (this._modal) return;
      this._modal = this._injector.get(NgbModal);
      const ref = this._modal.open(ErrorDialogComponent, { centered: true, scrollable: true });

      ref.componentInstance.errors = this._errors;
      ref.hidden.subscribe(() => {
        this._modal = undefined;
        this._errors = [];
      });
    });
  }
}
