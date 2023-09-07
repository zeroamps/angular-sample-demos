import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

import { User } from '@app/shared/entities';
import { UsersService } from '@app/shared/sources/users.service';

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardOneComponent implements OnInit {
  users: User[] = [];
  constructor(private usersService: UsersService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.usersService
      .listUsers()
      .pipe(finalize(() => console.log('finalize listUsers')))
      .subscribe((users) => {
        this.users = users;
        this.changeDetectorRef.markForCheck();
      });
  }
}
