import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

import { PushBasedUsersService } from '@app/shared/sources/push-based-users.service';

@Component({
  selector: 'app-dashboard-three',
  templateUrl: './dashboard-three.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardThreeComponent implements OnInit {
  users$ = this.usersService.users$.pipe(finalize(() => console.log('finalize users$')));
  constructor(private usersService: PushBasedUsersService) {}

  ngOnInit() {
    this.usersService
      .listUsers()
      .pipe(finalize(() => console.log('finalize listUsers')))
      .subscribe();
  }
}
