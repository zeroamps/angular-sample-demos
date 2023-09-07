import { ChangeDetectionStrategy, Component } from '@angular/core';
import { finalize } from 'rxjs';

import { UsersService } from '@app/shared/sources/users.service';

@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTwoComponent {
  users$ = this.usersService.listUsers().pipe(finalize(() => console.log('finalize listUsers')));
  constructor(private usersService: UsersService) {}
}
