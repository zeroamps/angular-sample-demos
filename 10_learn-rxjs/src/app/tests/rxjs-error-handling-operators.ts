import { catchError, of, retry } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export function test_catchError() {
  const url = 'https://jsonplaceholder.typicode.com/postsssss';

  ajax
    .getJSON(url)
    .pipe(
      catchError((error) => {
        console.log(error);
        return of('ERROR!');
      })
    )
    .subscribe((response) => console.log(response));
}

export function test_retry() {
  const url = 'https://jsonplaceholder.typicode.com/postsssss';

  ajax
    .getJSON(url)
    .pipe(
      retry(2),
      catchError((error) => {
        console.log(error);
        return of('ERROR!');
      })
    )
    .subscribe((response) => console.log(response));
}
