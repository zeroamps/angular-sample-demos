import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService implements ErrorHandler {
  error$ = new Subject<any>();
  constructor(private zone: NgZone) {}

  handleError(error: any): void {
    this.zone.run(() => {
      console.error(error);
      this.error$.next(error);
    });
  }
}
