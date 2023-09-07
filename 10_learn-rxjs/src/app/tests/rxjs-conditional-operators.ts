import { defaultIfEmpty, every, find, findIndex, interval, isEmpty, take, takeUntil, tap } from 'rxjs';

export function test_defaultIfEmpty() {
  interval(5000)
    .pipe(takeUntil(interval(2000)), defaultIfEmpty('HOHOOO!'))
    .subscribe((result) => console.log('result', result));
}

export function test_every() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(5),
      every((value) => value < 5)
    )
    .subscribe((result) => console.log('result', result));
}

export function test_find() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(10),
      find((value) => value === 5)
    )
    .subscribe((result) => console.log('result', result));
}

export function test_findIndex() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(10),
      findIndex((value) => value === 5)
    )
    .subscribe((result) => console.log('result', result));
}

export function test_isEmpty() {
  interval(5000)
    .pipe(takeUntil(interval(2000)), isEmpty())
    .subscribe((result) => console.log('result', result));
}
