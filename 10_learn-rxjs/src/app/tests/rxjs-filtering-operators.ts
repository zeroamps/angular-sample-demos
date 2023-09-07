import {
  auditTime,
  debounceTime,
  distinct,
  distinctUntilChanged,
  elementAt,
  filter,
  first,
  ignoreElements,
  interval,
  last,
  of,
  sampleTime,
  single,
  skip,
  skipLast,
  take,
  takeLast,
  tap
} from 'rxjs';

export function test_audit() {}

export function test_auditTime() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(5),
      auditTime(3000)
    )
    .subscribe((value) => console.log(value));
}

export function test_debounce() {}

export function test_debounceTime() {
  interval(5000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(5),
      debounceTime(3000)
    )
    .subscribe((value) => console.log(value));
}

export function test_distinct() {
  of(1, 1, 1, 2, 2, 2, 1, 1, 1, 3, 3, 3, 1, 1, 1, 4, 4, 4, 1, 1, 1, 5, 5, 5)
    .pipe(distinct())
    .subscribe((value) => console.log(value));
}

export function test_distinctUntilChanged() {
  of(1, 1, 1, 2, 2, 2, 1, 1, 1, 3, 3, 3, 1, 1, 1, 4, 4, 4, 1, 1, 1, 5, 5, 5)
    .pipe(distinctUntilChanged())
    .subscribe((value) => console.log(value));
}

export function test_distinctUntilKeyChanged() {}

export function test_elementAt() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      elementAt(2)
    )
    .subscribe((value) => console.log(value));
}

export function test_filter() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(10),
      filter((value) => value % 2 === 0)
    )
    .subscribe((value) => console.log(value));
}

export function test_first() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      first()
    )
    .subscribe((value) => console.log(value));
}

export function test_ignoreElements() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(5),
      ignoreElements()
    )
    .subscribe((value) => console.log(value));
}

export function test_last() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(5),
      last()
    )
    .subscribe((value) => console.log(value));
}

export function test_sample() {}

export function test_sampleTime() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(10),
      sampleTime(2000)
    )
    .subscribe((value) => console.log(value));
}

export function test_single() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(5),
      single((value) => value === 3)
    )
    .subscribe((value) => console.log(value));
}

export function test_skip() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(8),
      skip(4)
    )
    .subscribe((value) => console.log(value));
}

export function test_skipLast() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(8),
      skipLast(4)
    )
    .subscribe((value) => console.log(value));
}

export function test_skipUntil() {}

export function test_skipWhile() {}

export function test_take() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(5)
    )
    .subscribe((value) => console.log(value));
}

export function test_takeLast() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(10),
      takeLast(5)
    )
    .subscribe((value) => console.log(value));
}

export function test_takeUntil() {}

export function test_takeWhile() {}

export function test_throttle() {}

export function test_throttleTime() {}
