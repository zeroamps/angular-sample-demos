import { ChangeDetectionStrategy, Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageAComponent {
  constructor(public service: CounterService) {}
}
