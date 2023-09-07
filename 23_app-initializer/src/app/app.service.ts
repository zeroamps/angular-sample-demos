import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map } from 'rxjs';

import { environment } from '../environments/environment';
import { Album, Comment, Photo, Post, Todo, User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  posts$ = new BehaviorSubject<Post[]>([]);
  comments$ = new BehaviorSubject<Comment[]>([]);
  albums$ = new BehaviorSubject<Album[]>([]);
  photos$ = new BehaviorSubject<Photo[]>([]);
  todos$ = new BehaviorSubject<Todo[]>([]);
  users$ = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {}

  listPosts() {
    return this.http.get<Post[]>(`${environment.url}/posts`).pipe(
      delay(3000),
      map((data) => this.posts$.next(data))
    );
  }

  listComments() {
    return this.http.get<Comment[]>(`${environment.url}/comments`).pipe(
      delay(3000),
      map((data) => this.comments$.next(data))
    );
  }

  listAlbums() {
    return this.http.get<Album[]>(`${environment.url}/albums`).pipe(
      delay(3000),
      map((data) => this.albums$.next(data))
    );
  }

  listPhotos() {
    return this.http.get<Photo[]>(`${environment.url}/photos`).pipe(
      delay(3000),
      map((data) => this.photos$.next(data))
    );
  }

  listTodos() {
    return this.http.get<Todo[]>(`${environment.url}/todos`).pipe(
      delay(3000),
      map((data) => this.todos$.next(data))
    );
  }

  listUsers() {
    return this.http.get<User[]>(`${environment.url}/users`).pipe(
      delay(3000),
      map((data) => this.users$.next(data))
    );
  }
}
