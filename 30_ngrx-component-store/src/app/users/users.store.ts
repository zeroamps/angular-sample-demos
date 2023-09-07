import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap } from 'rxjs';

import { User } from '@app/shared/entities';
import { UsersService } from '@app/shared/sources/users.service';
import { finalize } from 'rxjs';

export interface UsersState {
  users: User[];
}

@Injectable()
export class UsersStore extends ComponentStore<UsersState> {
  readonly vm$ = this.state$;

  constructor(private usersService: UsersService) {
    super({ users: [] });
  }

  readonly initialize = this.effect<void>((trigger$) =>
    trigger$.pipe(
      finalize(() => console.log('finalize initialize')),
      exhaustMap(() =>
        this.usersService.listUsers().pipe(
          tapResponse(
            (users) => this.setState({ users: users }),
            (error) => console.log(error)
          )
        )
      )
    )
  );
}
