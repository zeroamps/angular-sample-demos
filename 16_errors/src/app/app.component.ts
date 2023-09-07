import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  error() {
    setTimeout(() => {
      throw new Error('This is an async error 1!');
    }, 200);
    setTimeout(() => {
      throw new Error('This is an async error 2');
    }, 400);
    setTimeout(() => {
      throw new Error('This is an async error 3');
    }, 600);
    throw new Error('This is a real error!');
  }
}
