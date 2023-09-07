import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, finalize, interval } from 'rxjs';

export const COUNTER_SERVICE = new InjectionToken<CounterService>('Counter');
export const COUNTERS = new InjectionToken<CounterService>('Counters');

@Injectable()
export class CounterService {
  counter$ = new BehaviorSubject(0);

  constructor() {
    interval(1000)
      .pipe(finalize(() => console.log('finalize')))
      .subscribe(() => this.counter$.next(this.counter$.value + 1));
  }
}
