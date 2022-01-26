import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserDto } from 'src/app/models/user/userDto';
import { UserService } from 'src/app/services/user.service';
import * as CommonActions from '../common/common.actions';

@Injectable()
export class CommonEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

  loginEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommonActions.login),
      mergeMap((action) =>
        this.userService.login(action.userLoginDto).pipe(
          map((users: UserDto[]) =>
            CommonActions.loginSuccess({ userForLogin: users[0] })
          ),
          catchError(() => of({ type: 'login error' }))
        )
      )
    )
  );
}
