import { call, put } from 'redux-saga/effects';
import { API } from '@/api';
import { setStartAuthInit, setStopAuthInit, authInit } from '../../reducer';

export function* authInitWorkerSaga() {
  yield put(setStartAuthInit());

  try {
    const { user } = yield call(API.AUTH.INIT);

    yield put(authInit(user));
  } catch (error) {
    // console.error('=== Error authInitWorkerSaga ===', error);
  } finally {
    yield put(setStopAuthInit());
  }
}
