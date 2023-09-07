import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {
  promise() {
    const promise = fetch('https://jsonplaceholder.typicode.com/todos');
    from(promise).subscribe((response) => from(response.json()).subscribe((data) => console.log(data)));
  }
}
