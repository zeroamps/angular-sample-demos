import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-page-host',
  templateUrl: './page-host.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHostComponent {}
