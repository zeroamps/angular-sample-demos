import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.scss']
})
export class FinalizeComponent {
  constructor(private _httpClient: HttpClient) {}

  finalize() {
    this._httpClient
      .get('https://jsonplaceholder.typicode.com/todos')
      .pipe(finalize(() => console.log('finalize')))
      .subscribe((data) => console.log(data));
  }
}
