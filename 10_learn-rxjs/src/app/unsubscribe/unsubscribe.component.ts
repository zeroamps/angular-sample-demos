import { Component } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { finalize, take, takeLast, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent {
  private _subscription: Subscription;
  private _notifier = new Subject();

  start() {
    this._subscription = interval(1000)
      .pipe(finalize(() => console.log('finalize interval 1')))
      .subscribe((value) => console.log(`interval 1 = ${value}`));

    interval(1000)
      .pipe(
        finalize(() => console.log('finalize interval 2')),
        take(3)
      )
      .subscribe((value) => console.log(`interval 2 = ${value}`));

    interval(1000)
      .pipe(
        finalize(() => console.log('finalize interval 3')),
        takeUntil(this._notifier)
      )
      .subscribe((value) => console.log(`interval 3 = ${value}`));

    interval(1000)
      .pipe(
        finalize(() => console.log('finalize interval 4')),
        takeWhile((value) => value < 5)
      )
      .subscribe((value) => console.log(`interval 4 = ${value}`));

    interval(1000)
      .pipe(
        finalize(() => console.log('finalize interval 5')),
        takeUntil(this._notifier),
        takeLast(3)
      )
      .subscribe((value) => console.log(`interval 5 = ${value}`));
  }

  stop() {
    console.log(this._subscription);
    this._subscription.unsubscribe();
    console.log(this._subscription);
    this._notifier.next(null);
  }
}
