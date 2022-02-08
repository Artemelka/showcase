import { createSelector } from 'reselect';
import { UserRole } from '../../api';
import { AUTH_REDUCER_NAME, INITIAL_STATE } from './constants';
import { AppStoreWithAuth } from './types';

const authSelector = (state: AppStoreWithAuth) => state[AUTH_REDUCER_NAME] || INITIAL_STATE;

export const isLoginSelector = createSelector(
  [authSelector],
  ({ isLogin }): boolean => isLogin
);

export const authIsLoadingSelector = createSelector(
  [authSelector],
  ({ isLoading }): boolean => isLoading
);

export const authUserRoleSelector = createSelector(
  [authSelector],
  ({ role }): UserRole => role
);