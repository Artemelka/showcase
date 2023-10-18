import { fork, take } from 'redux-saga/effects';
import { AUTH_INIT_ACTION_SAGA } from '../../actions';
import { authInitWorkerSaga } from './auth-init';

function* authInitWatcherSaga() {
  while (true) {
    yield take(AUTH_INIT_ACTION_SAGA);
    yield fork(authInitWorkerSaga);
  }
}

export const AUTH_INIT_INJECT_SAGA_CONFIG = {
  name: 'AUTH_INIT_WATCHER_SAGA',
  saga: authInitWatcherSaga,
};
