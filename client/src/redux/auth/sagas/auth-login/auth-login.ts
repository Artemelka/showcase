import { call, put } from 'redux-saga/effects';
import { API } from '../../../../api';
import {
  authInit,
  setStartAuthLogin,
  setStopAuthLogin,
} from '../../reducer';

export function* authLoginWorkerSaga() {
  yield put(setStartAuthLogin());

  try {
    const response = yield call(API.AUTH.LOGIN, '1');

    yield put(authInit(response));
  } catch (error) {
    console.error('=== Error authLoginWorkerSaga ===', error);
  } finally {
    yield put(setStopAuthLogin());
  }
}