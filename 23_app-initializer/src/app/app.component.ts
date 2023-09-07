import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AppService } from './app.service';
import { Album, Comment, Photo, Post, Todo, User } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  posts$: Observable<Post[]>;
  comments$: Observable<Comment[]>;
  albums$: Observable<Album[]>;
  photos$: Observable<Photo[]>;
  todos$: Observable<Todo[]>;
  users$: Observable<User[]>;

  constructor(private service: AppService) {
    this.posts$ = this.service.posts$;
    this.comments$ = this.service.comments$;
    this.albums$ = this.service.albums$;
    this.photos$ = this.service.photos$;
    this.todos$ = this.service.todos$;
    this.users$ = this.service.users$;
  }
}
