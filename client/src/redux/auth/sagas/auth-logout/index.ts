import { fork, take } from 'redux-saga/effects';
import { AUTH_LOGOUT_ACTION_SAGA } from '../../actions';
import { authLogoutWorkerSaga } from './auth-logout';

function* authLogoutWatcherSaga() {
  while (true) {
    yield take(AUTH_LOGOUT_ACTION_SAGA);
    yield fork(authLogoutWorkerSaga);
  }
}

export const AUTH_LOGOUT_INJECT_SAGA_CONFIG = {
  name: 'AUTH_LOGOUT_WATCHER_SAGA',
  saga: authLogoutWatcherSaga,
};