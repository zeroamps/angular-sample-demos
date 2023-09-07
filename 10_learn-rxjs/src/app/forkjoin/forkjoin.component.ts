import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin, tap, map } from 'rxjs';

@Component({
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent {
  private _url = 'https://jsonplaceholder.typicode.com';
  constructor(private _httpClient: HttpClient) {}

  load1() {
    forkJoin({
      posts: this._httpClient.get(`${this._url}/posts`),
      comments: this._httpClient.get(`${this._url}/comments`),
      albums: this._httpClient.get(`${this._url}/albums`),
      photos: this._httpClient.get(`${this._url}/photos`),
      todos: this._httpClient.get(`${this._url}/todos`),
      users: this._httpClient.get(`${this._url}/users`)
    }).subscribe((data) => console.log(data));
  }

  load2() {
    forkJoin([
      this._httpClient.get(`${this._url}/posts`),
      this._httpClient.get(`${this._url}/comments`),
      this._httpClient.get(`${this._url}/albums`),
      this._httpClient.get(`${this._url}/photos`),
      this._httpClient.get(`${this._url}/todos`),
      this._httpClient.get(`${this._url}/users`)
    ]).subscribe(([posts, comments, albums, photos, todos, users]) =>
      console.log(posts, comments, albums, photos, todos, users)
    );
  }

  load3() {
    forkJoin([
      this._httpClient.get(`${this._url}/posts`),
      this._httpClient.get(`${this._url}/comments`),
      this._httpClient.get(`${this._url}/albums`),
      this._httpClient.get(`${this._url}/photos`),
      this._httpClient.get(`${this._url}/todos`),
      this._httpClient.get(`${this._url}/users`)
    ])
      .pipe(
        map(([posts, comments, albums, photos, todos, users]) => {
          console.log(posts, comments, albums, photos, todos, users);
          return true;
        })
      )
      .subscribe((value) => console.log(value));
  }
}
