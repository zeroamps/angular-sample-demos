import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, share, shareReplay, Observable } from 'rxjs';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent {
  todos$: Observable<Todo[]>;

  constructor(private _httpClient: HttpClient) {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    this.todos$ = this._httpClient.get<Todo[]>(url).pipe(
      tap(() => console.log('Processing')),
      // share()
      shareReplay()
    );
  }

  share() {
    this.todos$.subscribe((todos) => console.log(todos));
  }
}
