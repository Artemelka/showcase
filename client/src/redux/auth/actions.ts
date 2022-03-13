import { Action } from 'redux';

export const AUTH_INIT_ACTION_SAGA = 'AUTH_INIT_ACTION_SAGA';
export const authInitActionSaga = (): Action<string> => ({
  type: AUTH_INIT_ACTION_SAGA,
});

export const AUTH_LOGIN_ACTION_SAGA = 'AUTH_LOGIN_ACTION_SAGA';
export const authLoginActionSaga = (): Action<string> => ({
  type: AUTH_LOGIN_ACTION_SAGA,
});

export const AUTH_LOGOUT_ACTION_SAGA = 'AUTH_LOGOUT_ACTION_SAGA';
export const authLogoutActionSaga = (): Action<string> => ({
  type: AUTH_LOGOUT_ACTION_SAGA,
});