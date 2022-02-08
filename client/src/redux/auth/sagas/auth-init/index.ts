import { Action } from 'redux';
import { fork, take } from 'redux-saga/effects';
import { authInitWorkerSaga } from './auth-init';

const AUTH_INIT = 'AUTH_INIT';

function* authInitWatcherSaga() {
  while (true) {
    yield take(AUTH_INIT);
    yield fork(authInitWorkerSaga);
  }
}

export const authInitActionSaga = (): Action<string> => ({ type: AUTH_INIT });

export const AUTH_INIT_INJECT_SAGA_CONFIG = {
  name: 'AUTH_INIT_WATCHER_SAGA',
  saga: authInitWatcherSaga,
};