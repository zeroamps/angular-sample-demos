import { delay, delayWhen, interval, take, tap, timeInterval, timeout, timer, toArray } from 'rxjs';

export function test_tap() {
  interval(1000)
    .pipe(
      tap((value) => console.log('value', value)),
      take(10)
    )
    .subscribe();
}

export function test_delay() {
  interval(1000)
    .pipe(
      tap((value) => console.log('value', value)),
      take(10),
      delay(2500)
    )
    .subscribe((result) => console.log('result', result));
}

export function test_delayWhen() {
  interval(1000)
    .pipe(
      tap((value) => console.log('value', value)),
      take(10),
      delayWhen(() => timer(5000))
    )
    .subscribe((result) => console.log('result', result));
}

export function test_timeInterval() {
  interval(1000)
    .pipe(
      tap((value) => console.log('value', value)),
      take(10),
      timeInterval()
    )
    .subscribe((result) => console.log('result', result));
}

export function test_timeout() {
  timer(5000)
    .pipe(
      tap((value) => console.log('value', value)),
      timeout(2500)
    )
    .subscribe((result) => console.log('result', result));
}

export function test_toArray() {
  interval(1000)
    .pipe(
      tap((value) => console.log('value', value)),
      take(10),
      toArray()
    )
    .subscribe((result) => console.log('result', result));
}
