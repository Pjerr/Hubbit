import { state } from '@angular/animations';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Common } from 'src/app/models/common';
import { UserForStore } from 'src/app/models/user/user-for-store';
import * as CommonActions from './common.actions';

export interface CommonState extends EntityState<Common> {
  isLoggedIn: boolean;
  user: UserForStore;
}

const adapter = createEntityAdapter<Common>();

const initalState: CommonState = adapter.getInitialState({
  isLoggedIn: false,
  user: {
    id: -1,
    username: '',
  },
});

//TODO: fix reducer
export const commonReducer = createReducer(
  initalState,
  on(CommonActions.loginSuccess, (state) => {
    return state;
  }),
  //ZA SADA, treba da se odradi i poziv servisa da bi se u useru nesto upisalo, medjutim za sad neka ga ovako, sutra probaj sa nekim json-serverom kako ce to da radi
  on(CommonActions.login, (state, { loginStatus }) => ({
    ...state,
    isLoggedIn: loginStatus,
  }))
);
