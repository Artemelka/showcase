import { Action } from 'redux';
import { fork, take } from 'redux-saga/effects';
import { authLogoutWorkerSaga } from './auth-logout';

const AUTH_LOGOUT = 'AUTH_LOGOUT';

function* authLogoutWatcherSaga() {
  while (true) {
    yield take(AUTH_LOGOUT);
    yield fork(authLogoutWorkerSaga);
  }
}

export const authLogoutActionSaga = (): Action<string> => ({ type: AUTH_LOGOUT });

export const AUTH_LOGOUT_INJECT_SAGA_CONFIG = {
  name: 'AUTH_LOGOUT_WATCHER_SAGA',
  saga: authLogoutWatcherSaga,
};