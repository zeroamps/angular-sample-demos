import {
  bindCallback,
  bindNodeCallback,
  defer,
  from,
  fromEvent,
  fromEventPattern,
  generate,
  iif,
  interval,
  of,
  range,
  take,
  throwError,
  timer
} from 'rxjs';

import { ajax } from 'rxjs/ajax';

export function test_ajax() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  ajax.getJSON(url).subscribe((response) => console.log(response));
}

export function test_bindCallback() {
  const message = (message: string, callback: (message: string) => void) => console.log(message);
  const callbackFactory = bindCallback(message);

  const hello = callbackFactory('Hello!!!');
  hello.subscribe((value) => console.log(value));
}

export function test_bindNodeCallback() {
  const message = (message: string, callback: (message: string) => void) => console.log(message);
  const callbackFactory = bindNodeCallback(message);

  const hello = callbackFactory('Hello!!!');
  hello.subscribe((value) => console.log(value));
}

export function test_defer() {
  console.log('Start!');

  const stream1$ = of(new Date(), new Date(), new Date());
  const stream2$ = defer(() => of(new Date(), new Date(), new Date()));

  timer(3000).subscribe(() => {
    stream1$.subscribe((value) => console.log('stream1$', value));
    stream2$.subscribe((value) => console.log('stream2$', value));
  });
}

export function test_from() {
  from([1, 2, 3, 4, 5, 6, 7, 8, 9]).subscribe((value) => console.log(value));
}

export function test_fromEvent() {
  fromEvent(document, 'click').subscribe((event) => console.log(event));
}

export function test_fromEventPattern() {
  fromEventPattern((handler) => addEventListener('click', handler)).subscribe((value) => console.log(value));
}

export function test_generate() {
  generate({
    initialState: 0,
    condition: (x) => x < 10,
    iterate: (x) => x + 2
  }).subscribe((value) => console.log(value));
}

export function test_interval() {
  interval(1000)
    .pipe(take(10))
    .subscribe((value) => console.log(value));
}

export function test_of() {
  of(1, 2, 3, 4, 5).subscribe((value) => console.log(value));
}

export function test_range() {
  range(1, 9).subscribe((value) => console.log(value));
}

export function test_throwError() {
  throwError(() => new Error('This is a real error!')).subscribe();
}

export function test_timer() {
  timer(1000).subscribe(() => console.log('Hello after 1s!'));
  timer(2000).subscribe(() => console.log('Hello after 2s!'));
  timer(3000).subscribe(() => console.log('Hello after 3s!'));
}

export function test_iif() {
  iif(() => false, of(1, 2, 3), of(4, 5, 6)).subscribe((value) => console.log(value));
}
