import { count, interval, max, min, reduce, take, tap } from 'rxjs';

export function test_count() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(10),
      count()
    )
    .subscribe((result) => console.log('result', result));
}

export function test_min() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(10),
      min()
    )
    .subscribe((result) => console.log('result', result));
}

export function test_max() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(10),
      max()
    )
    .subscribe((result) => console.log('result', result));
}

export function test_reduce() {
  interval(1000)
    .pipe(
      tap((value) => console.log('tap', value)),
      take(10),
      reduce((acc, value) => acc + value * 2, 0)
    )
    .subscribe((result) => console.log('result', result));
}
