import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { COUNTERS, CounterService, COUNTER_SERVICE } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    @Inject('COUNTER_SERVICE') service1: CounterService,
    @Inject(COUNTER_SERVICE) service2: CounterService,
    @Inject(COUNTERS) counters: CounterService[]
  ) {
    console.log(service1, service2);
    console.log(counters);
  }
}
