import { call, put } from 'redux-saga/effects';
import { API } from '@/api';
import { appLogger } from '@/services/app-logger';
import { setStartAuthInit, setStopAuthInit, authInit } from '../../reducer';

export function* authInitWorkerSaga() {
  yield put(setStartAuthInit());

  try {
    const authData = yield call(API.AUTH.INIT);

    yield put(authInit(authData));
  } catch (error) {
    appLogger.error('=== Error authInitWorkerSaga ===', error);
  } finally {
    yield put(setStopAuthInit());
  }
}
