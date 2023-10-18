import { fork, take } from 'redux-saga/effects';
import { AUTH_LOGIN_ACTION_SAGA } from '../../actions';
import { authLoginWorkerSaga } from './auth-login';

function* authInitWatcherSaga() {
  while (true) {
    yield take(AUTH_LOGIN_ACTION_SAGA);
    yield fork(authLoginWorkerSaga);
  }
}

export const AUTH_LOGIN_INJECT_SAGA_CONFIG = {
  name: 'AUTH_LOGIN_WATCHER_SAGA',
  saga: authInitWatcherSaga,
};
