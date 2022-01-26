import { createAction, props } from '@ngrx/store';
import { UserDto } from 'src/app/models/user/userDto';
import { UserLoginDto } from 'src/app/models/user/userLoginDto';

export const login = createAction(
  '[Common] Login',
  props<{
    userLoginDto: UserLoginDto;
  }>()
);

export const loginSuccess = createAction(
  '[Common] Login success',
  props<{ userForLogin: UserDto }>()
);

export const toggleLoginStatus = createAction(
  '[Common] Toggle Login Status',
  props<{ loginStatus: boolean }>()
);
