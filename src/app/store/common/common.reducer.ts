import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Common } from 'src/app/models/common';
import * as CommonActions from './common.actions';

export interface CommonState extends EntityState<Common> {
  currentUserID: number;
  isLoggedIn: boolean;
}

const adapter = createEntityAdapter<Common>();

const initalState: CommonState = adapter.getInitialState({
  currentUserID: -1,
  isLoggedIn: false,
});

export const commonReducer = createReducer(
  initalState,
  on(CommonActions.loginSuccess, (state, { userForLogin }) => {
    console.log(userForLogin);
    return { ...state, currentUserID: userForLogin.id, isLoggedIn: true };
  }),
  on(CommonActions.toggleLoginStatus, (state, { loginStatus }) => ({
    ...state,
    isLoggedIn: loginStatus,
  }))
);
