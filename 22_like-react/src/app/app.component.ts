import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AppService } from './app.service';
import { Todo } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  todos$ = new BehaviorSubject<Todo[]>([]);
  constructor(private service: AppService) {}

  load() {
    this.service.listTodos().subscribe((data) => this.todos$.next(data));
  }

  filter() {
    this.service.filterTodos(1).subscribe((data) => this.todos$.next(data));
  }

  find() {
    this.service.findTodo(1).subscribe((data) => this.todos$.next([data]));
  }

  create() {
    this.service
      .createTodo({ userId: 1, id: 0, title: 'This is my todo.', completed: false })
      .subscribe((data) => console.log(data));
  }

  update() {
    this.service
      .updateTodo({ userId: 1, id: 1, title: 'This is my todo.', completed: false })
      .subscribe((data) => console.log(data));
  }

  remove() {
    this.service.removeTodo(1).subscribe((data) => console.log(data));
  }

  clear() {
    this.todos$.next([]);
  }
}
