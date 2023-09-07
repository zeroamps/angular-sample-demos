import { ChangeDetectionStrategy, Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageBComponent {
  constructor(public service: CounterService) {}
}
