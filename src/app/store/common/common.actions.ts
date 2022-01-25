import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Common] Login',
  props<{
    loginStatus: boolean;
  }>()
);

//props verovatno vraca tog usera kog smo loginovali
export const loginSuccess = createAction('[Common] Login success');
