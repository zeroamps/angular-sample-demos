import {
  animationFrameScheduler,
  asapScheduler,
  asyncScheduler,
  observeOn,
  of,
  queueScheduler,
  subscribeOn,
  tap
} from 'rxjs';

export function test_schedulers_observeOn() {
  console.log('Start!');

  of(1, 2, 3)
    .pipe(
      observeOn(queueScheduler),
      tap((value) => console.log('queueScheduler', value))
    )
    .subscribe((value) => console.log('queueScheduler', value));

  of(1, 2, 3)
    .pipe(
      observeOn(animationFrameScheduler),
      tap((value) => console.log('animationFrameScheduler', value))
    )
    .subscribe((value) => console.log('animationFrameScheduler', value));

  of(1, 2, 3)
    .pipe(
      observeOn(asyncScheduler),
      tap((value) => console.log('asyncScheduler', value))
    )
    .subscribe((value) => console.log('asyncScheduler', value));

  of(1, 2, 3)
    .pipe(
      observeOn(asapScheduler),
      tap((value) => console.log('asapScheduler', value))
    )
    .subscribe((value) => console.log('asapScheduler', value));

  of(1, 2, 3)
    .pipe(tap((value) => console.log(null, value)))
    .subscribe((value) => console.log(null, value));

  console.log('Done!');
}

export function test_schedulers_subscribeOn() {
  console.log('Start!');

  of(1, 2, 3)
    .pipe(
      tap((value) => console.log('queueScheduler', value)),
      subscribeOn(queueScheduler)
    )
    .subscribe((value) => console.log('queueScheduler', value));

  of(1, 2, 3)
    .pipe(
      tap((value) => console.log('animationFrameScheduler', value)),
      subscribeOn(animationFrameScheduler)
    )
    .subscribe((value) => console.log('animationFrameScheduler', value));

  of(1, 2, 3)
    .pipe(
      tap((value) => console.log('asyncScheduler', value)),
      subscribeOn(asyncScheduler)
    )
    .subscribe((value) => console.log('asyncScheduler', value));

  of(1, 2, 3)
    .pipe(
      tap((value) => console.log('asapScheduler', value)),
      subscribeOn(asapScheduler)
    )
    .subscribe((value) => console.log('asapScheduler', value));

  of(1, 2, 3)
    .pipe(tap((value) => console.log(null, value)))
    .subscribe((value) => console.log(null, value));

  console.log('Done!');
}

export function test_schedulers_brainfuck() {
  console.log('Start!');

  of(1, 2, 3)
    .pipe(
      tap((value) => console.log('tap', 'test 1', value)),
      observeOn(asapScheduler),
      subscribeOn(asyncScheduler)
    )
    .subscribe((value) => console.log('subscribe', 'test 1', value));

  of(1, 2, 3)
    .pipe(
      tap((value) => console.log('tap', 'test 2', value)),
      observeOn(asyncScheduler)
    )
    .subscribe((value) => console.log('subscribe', 'test 2', value));

  of(1, 2, 3)
    .pipe(
      tap((value) => console.log('tap', 'test 3', value)),
      subscribeOn(asyncScheduler)
    )
    .subscribe((value) => console.log('subscribe', 'test 3', value));

  of(1, 2, 3)
    .pipe(tap((value) => console.log(null, value)))
    .subscribe((value) => console.log(null, value));

  console.log('Done!');
}
