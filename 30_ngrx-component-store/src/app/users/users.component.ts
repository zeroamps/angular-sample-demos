import { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersStore } from './users.store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersStore]
})
export class UsersComponent implements OnInit {
  constructor(public store: UsersStore) {}

  ngOnInit() {
    this.store.initialize();
  }
}
