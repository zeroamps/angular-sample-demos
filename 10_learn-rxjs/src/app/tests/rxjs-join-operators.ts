import {
  combineLatestAll,
  concatAll,
  exhaustAll,
  interval,
  map,
  mergeAll,
  of,
  switchAll,
  take,
  withLatestFrom
} from 'rxjs';

export function test_combineLatestAll() {
  const stream$ = of(
    interval(500).pipe(
      take(5),
      map((value) => `A${value}`)
    ),
    interval(1000).pipe(
      take(5),
      map((value) => `B${value}`)
    ),
    interval(1500).pipe(
      take(5),
      map((value) => `C${value}`)
    )
  );

  stream$.pipe(combineLatestAll()).subscribe((value) => console.log(value));
}

export function test_concatAll() {
  const stream$ = of(
    interval(500).pipe(
      take(5),
      map((value) => `A${value}`)
    ),
    interval(1000).pipe(
      take(5),
      map((value) => `B${value}`)
    ),
    interval(1500).pipe(
      take(5),
      map((value) => `C${value}`)
    )
  );

  stream$.pipe(concatAll()).subscribe((value) => console.log(value));
}

export function test_exhaustAll() {
  const stream$ = of(
    interval(500).pipe(
      take(5),
      map((value) => `A${value}`)
    ),
    interval(1000).pipe(
      take(5),
      map((value) => `B${value}`)
    ),
    interval(1500).pipe(
      take(5),
      map((value) => `C${value}`)
    )
  );

  stream$.pipe(exhaustAll()).subscribe((value) => console.log(value));
}

export function test_mergeAll() {
  const stream$ = of(
    interval(500).pipe(
      take(5),
      map((value) => `A${value}`)
    ),
    interval(1000).pipe(
      take(5),
      map((value) => `B${value}`)
    ),
    interval(1500).pipe(
      take(5),
      map((value) => `C${value}`)
    )
  );

  stream$.pipe(mergeAll()).subscribe((value) => console.log(value));
}

export function test_switchAll() {
  const stream$ = of(
    interval(500).pipe(
      take(5),
      map((value) => `A${value}`)
    ),
    interval(1000).pipe(
      take(5),
      map((value) => `B${value}`)
    ),
    interval(1500).pipe(
      take(5),
      map((value) => `C${value}`)
    )
  );

  stream$.pipe(switchAll()).subscribe((value) => console.log(value));
}

export function test_withLatestFrom() {
  const stream$ = interval(500).pipe(
    take(10),
    map((value) => `B${value}`)
  );

  interval(1000)
    .pipe(
      take(10),
      map((value) => `A${value}`),
      withLatestFrom(stream$)
    )
    .subscribe((value) => console.log(value));
}
