import { AsyncSubject, BehaviorSubject, finalize, interval, Observable, ReplaySubject, Subject } from 'rxjs';

export function test_observable() {
  new Observable((subscriber) => {
    subscriber.next(1000);
    subscriber.next(2000);
    subscriber.next(3000);

    setTimeout(() => {
      subscriber.next(4000);
      subscriber.complete();
    }, 3000);
  }).subscribe((result) => console.log(result));
}

export function test_observer() {
  new Observable((subscriber) => {
    subscriber.next(1000);
    subscriber.next(2000);
    subscriber.next(3000);
    // throw new Error('This is an error!');
    subscriber.complete();
  }).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('done!'),
    error: (error) => console.log(error)
  });
}

export function test_subscription() {
  const subscription = new Observable((subscriber) => {
    let count = 0;
    setInterval(() => {
      subscriber.next(count++);
    }, 1000);
  }).subscribe((result) => console.log(result));

  setTimeout(() => subscription.unsubscribe(), 10000);
}

export function test_subscriptionMulticast() {
  const stream$ = new Observable((subscriber) => {
    let count = 0;
    setInterval(() => {
      subscriber.next(count++);
    }, 1000);
  });

  const subscription = stream$.subscribe((value) => console.log('sub 1', value));
  subscription.add(stream$.subscribe((value) => console.log('sub 2', value)));
  subscription.add(stream$.subscribe((value) => console.log('sub 3', value)));

  setTimeout(() => subscription.unsubscribe(), 10000);
}

export function test_subject() {
  const stream$ = new Subject<number>();

  const subscription = stream$.subscribe((value) => console.log('sub 1', value));
  subscription.add(stream$.subscribe((value) => console.log('sub 2', value)));
  subscription.add(stream$.subscribe((value) => console.log('sub 3', value)));
  subscription.add(interval(1000).subscribe((value) => stream$.next(value)));

  setTimeout(() => {
    subscription.unsubscribe();
    stream$.unsubscribe();
  }, 10000);
}

export function test_subjectLikeObserver() {
  const stream$ = new Subject<number>();

  const subscription = stream$.subscribe((value) => console.log('sub 1', value));
  subscription.add(stream$.subscribe((value) => console.log('sub 2', value)));
  subscription.add(stream$.subscribe((value) => console.log('sub 3', value)));
  subscription.add(interval(1000).subscribe(stream$));

  setTimeout(() => {
    subscription.unsubscribe();
    stream$.unsubscribe();
  }, 10000);
}

export function test_behaviorSubject() {
  const stream$ = new BehaviorSubject(0);

  const subscription = stream$
    .pipe(finalize(() => console.log('stream$ done!')))
    .subscribe((value) => console.log('sub 1', value));

  stream$.next(1);
  stream$.next(2);

  subscription.add(stream$.subscribe((value) => console.log('sub 2', value)));

  stream$.next(3);
  stream$.complete();
}

export function test_replaySubject() {
  const stream$ = new ReplaySubject(2);

  const subscription = stream$
    .pipe(finalize(() => console.log('stream$ done!')))
    .subscribe((value) => console.log('sub 1', value));

  stream$.next(1);
  stream$.next(2);
  stream$.next(3);
  stream$.next(4);

  subscription.add(stream$.subscribe((value) => console.log('sub 2', value)));

  stream$.next(5);
  stream$.complete();
}

export function test_asyncSubject() {
  const stream$ = new AsyncSubject();

  const subscription = stream$
    .pipe(finalize(() => console.log('stream$ done!')))
    .subscribe((value) => console.log('sub 1', value));

  stream$.next(1);
  stream$.next(2);
  stream$.next(3);
  stream$.next(4);

  subscription.add(stream$.subscribe((value) => console.log('sub 2', value)));

  stream$.next(5);
  stream$.complete();
}

export function test_voidSubject() {
  const stream$ = new Subject<void>();

  const subscription = stream$.pipe(finalize(() => console.log('stream$ done!'))).subscribe(() => console.log('sub 1'));

  stream$.next();
  stream$.next();
  stream$.next();
  stream$.next();

  subscription.add(stream$.subscribe(() => console.log('sub 2')));

  stream$.next();
  stream$.complete();
}
