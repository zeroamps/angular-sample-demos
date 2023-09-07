import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { Todo } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  todosUrl = `${environment.url}/todos`;
  constructor(private http: HttpClient) {}

  listTodos() {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  filterTodos(userId: number) {
    return this.http.get<Todo[]>(`${this.todosUrl}?userId=${userId}`);
  }

  findTodo(todoId: number) {
    return this.http.get<Todo>(`${this.todosUrl}/${todoId}`);
  }

  createTodo(todo: Todo) {
    return this.http.post<Todo>(`${this.todosUrl}`, todo);
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>(`${this.todosUrl}/${todo.id}`, todo);
  }

  removeTodo(todoId: number) {
    return this.http.delete<Todo>(`${this.todosUrl}/${todoId}`);
  }
}
