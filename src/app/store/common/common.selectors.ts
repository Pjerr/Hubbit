import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CommonState } from './common.reducer';

export const selectCommonFeature = createSelector(
  (state: AppState) => state.common,
  (common) => common
);

export const selectIsLoggedIn = createSelector(
  selectCommonFeature,
  (state: CommonState) => state.isLoggedIn
);

export const selectCurrentUser = createSelector(
  selectCommonFeature,
  (state: CommonState) => state.user
);
