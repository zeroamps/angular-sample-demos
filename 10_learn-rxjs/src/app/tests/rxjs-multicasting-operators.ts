import { interval, mergeMap, share } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export function test_share() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const stream$ = interval(1000).pipe(
    mergeMap(() => ajax.getJSON(url)),
    share()
  );

  stream$.subscribe(() => console.log('SUB1'));
  stream$.subscribe(() => console.log('SUB2'));
  stream$.subscribe(() => console.log('SUB3'));
  stream$.subscribe(() => console.log('SUB4'));
  stream$.subscribe(() => console.log('SUB5'));
}
