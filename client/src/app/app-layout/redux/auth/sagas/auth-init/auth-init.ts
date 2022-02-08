import { Action } from 'redux';
import { call, fork, put, take } from 'redux-saga/effects';
import { API } from '../../../../../../api';
import {
  setStartAuthInit,
  setStopAuthInit,
  authInit,
} from '../../reducer';

const AUTH_INIT = 'AUTH_INIT';
export const authInitActionSaga = (): Action<string> => ({ type: AUTH_INIT });

function* authInitWorkerSaga() {
  yield put(setStartAuthInit());

  try {
    const response = yield call(API.AUTH.INIT);

    yield put(authInit(response))
  } catch (error) {
    console.error('=== Error authInitWorkerSaga ===', error);
  } finally {
    yield put(setStopAuthInit());
  }
}

function* authInitWatcherSaga() {
  while (true) {
    yield take(AUTH_INIT);
    yield fork(authInitWorkerSaga);
  }
}

export const AUTH_INIT_INJECT_SAGA_CONFIG = {
  name: 'AUTH_INIT_WATCHER_SAGA',
  saga: authInitWatcherSaga,
}