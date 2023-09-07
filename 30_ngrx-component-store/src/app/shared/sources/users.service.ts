import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, finalize, map } from 'rxjs';

import { environment } from '@env/environment';
import { User, Post, Comment } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  listUsers() {
    const users$ = this.httpClient
      .get<User[]>(`${environment.url}/users`)
      .pipe(finalize(() => console.log('finalize users')));

    const posts$ = this.httpClient
      .get<Post[]>(`${environment.url}/posts`)
      .pipe(finalize(() => console.log('finalize posts')));

    const comments$ = this.httpClient
      .get<Comment[]>(`${environment.url}/comments`)
      .pipe(finalize(() => console.log('finalize comments')));

    return combineLatest([users$, posts$, comments$]).pipe(
      finalize(() => console.log('finalize combineLatest')),
      map(([users, posts, comments]: [User[], Post[], Comment[]]) => {
        users.forEach((user) => (user.posts = posts.filter((post) => user.id === post.userId)));
        posts.forEach((post) => (post.comments = comments.filter((comment) => post.id === comment.postId)));
        return users;
      })
    );
  }
}
