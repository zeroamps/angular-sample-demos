import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {
  counter = { value: 1 };

  ngDoCheck() {
    console.log('ngDoCheck', this.constructor.name);
  }

  handleClick() {
    this.counter = { value: this.counter.value + 1 }; // GOOD
    // this.counter = { value: ++this.counter.value }; // BAD
    // this.counter.value++; // BAD
  }
}
