import { combineLatest, concat, forkJoin, interval, map, merge, of, partition, race, take, toArray, zip } from 'rxjs';

export function test_combineLatest() {
  const stream1$ = interval(1000).pipe(take(10));
  const stream2$ = interval(1200).pipe(take(10));
  const stream3$ = interval(1400).pipe(take(10));
  combineLatest([stream1$, stream2$, stream3$]).subscribe((value) => console.log(value));

  const stream4$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
  const stream5$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
  const stream6$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
  combineLatest([stream4$, stream5$, stream6$]).subscribe((value) => console.log(value));
}

export function test_concat() {
  const stream1$ = interval(1000).pipe(take(5));
  const stream2$ = interval(1200).pipe(take(5));
  const stream3$ = interval(1400).pipe(take(5));

  concat(stream1$, stream2$, stream3$).subscribe((value) => console.log(value));
}

export function test_forkJoin() {
  const stream1$ = interval(1000).pipe(take(5));
  const stream2$ = interval(1200).pipe(take(5));
  const stream3$ = interval(1400).pipe(take(5));

  forkJoin([stream1$, stream2$, stream3$]).subscribe((value) => console.log(value));
}

export function test_merge() {
  const stream1$ = interval(1000).pipe(take(5));
  const stream2$ = interval(2000).pipe(take(5));
  const stream3$ = interval(3000).pipe(take(5));

  merge(stream1$, stream2$, stream3$).subscribe((value) => console.log(value));
}

export function test_partition() {
  const stream$ = interval(1000).pipe(take(10));
  const [stream1$, stream2$] = partition(stream$, (value) => value % 2 === 0);

  stream1$.pipe(toArray()).subscribe((value) => console.log(value));
  stream2$.pipe(toArray()).subscribe((value) => console.log(value));
}

export function test_race() {
  const stream1$ = interval(3000).pipe(
    take(3),
    map(() => 'Stream 1 has won!')
  );
  const stream2$ = interval(2000).pipe(
    take(5),
    map(() => 'Stream 2 has won!')
  );

  race(stream1$, stream2$).subscribe((value) => console.log(value));
}

export function test_zip() {
  const stream1$ = interval(1000).pipe(take(5));
  const stream2$ = interval(2000).pipe(take(5));

  zip(stream1$, stream2$).subscribe((value) => console.log(value));
}
