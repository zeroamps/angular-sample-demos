import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  @Input() counter = 0;
  @Output() counterChange = new EventEmitter<number>();

  @HostListener('click')
  click1() {
    console.log('HostListener: button');
  }

  @HostListener('dblclick', ['$event.target'])
  click2(btn: HTMLElement) {
    console.log('HostListener: button', btn);
  }

  @HostBinding('class.valid') get valid() {
    return true;
  }

  @HostBinding('class.invalid') get invalid() {
    return false;
  }

  increase() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
}
