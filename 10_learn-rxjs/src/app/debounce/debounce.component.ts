import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

@Component({
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit, OnDestroy {
  query: FormControl;
  todos: Todo[];
  filteredTodos: Todo[];

  private _subject: Subject<string>;
  private _subscription: Subscription;

  constructor(private _httpClient: HttpClient) {
    this.query = new FormControl('');
    this._subject = new Subject<string>();
  }

  ngOnInit() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    this._httpClient.get<Todo[]>(url).subscribe((todos) => {
      this.filteredTodos = todos;
      this.todos = todos;
    });

    this._subscription = this._subject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => {
          return of(this.todos.filter((todo) => todo.title.includes(query)));
        })
      )
      .subscribe((todos) => {
        this.filteredTodos = todos;
      });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  search() {
    console.log(this.query.value);
    this._subject.next(this.query.value.trim());
  }
}
