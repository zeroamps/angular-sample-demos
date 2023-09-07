import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageAComponent implements DoCheck {
  @Input() counter = { value: 1 };

  ngDoCheck() {
    console.log('ngDoCheck', this.constructor.name);
  }

  handleClick() {
    this.counter = { value: this.counter.value + 1 }; // GOOD
    // this.counter = { value: ++this.counter.value }; // BAD
    // this.counter.value++; // BAD
  }
}
