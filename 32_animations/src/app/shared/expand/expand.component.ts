import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animation', [
      state(
        'open',
        style({
          transform: 'rotate(0)'
        })
      ),
      state(
        'closed',
        style({
          transform: 'rotate(90deg)'
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')])
    ])
  ]
})
export class ExpandComponent {
  collapsed = true;

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
