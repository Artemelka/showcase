import { Action } from 'redux';
import { fork, take } from 'redux-saga/effects';
import { authLoginWorkerSaga } from './auth-login';

const AUTH_LOGIN = 'AUTH_LOGIN';

function* authInitWatcherSaga() {
  while (true) {
    yield take(AUTH_LOGIN);
    yield fork(authLoginWorkerSaga);
  }
}

export const authLoginActionSaga = (): Action<string> => ({ type: AUTH_LOGIN });

export const AUTH_LOGIN_INJECT_SAGA_CONFIG = {
  name: 'AUTH_LOGIN_WATCHER_SAGA',
  saga: authInitWatcherSaga,
};