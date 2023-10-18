import { createSelector } from 'reselect';
import { User, UserRole } from '@/api';
import { AUTH_REDUCER_NAME, INITIAL_STATE } from './constants';
import { AuthStore } from './types';

const authSelector = (state: AuthStore) =>
  state[AUTH_REDUCER_NAME] || INITIAL_STATE;

export const authIsLoginSelector = createSelector(
  [authSelector],
  ({ isLogin }): boolean => isLogin,
);

export const authIsLoadingSelector = createSelector(
  [authSelector],
  ({ isLoading }): boolean => isLoading,
);

export const authLoginIsLoadingSelector = createSelector(
  [authSelector],
  ({ isLoginLoading }): boolean => isLoginLoading,
);

export const authUserSelector = createSelector(
  [authSelector],
  ({ user }): User => user,
);

export const authUserRoleSelector = createSelector(
  [authSelector],
  ({ user }): UserRole => user.role,
);
