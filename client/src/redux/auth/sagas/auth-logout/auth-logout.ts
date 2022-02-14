import { call, put } from 'redux-saga/effects';
import { API } from '../../../../api';
import {
  authInit,
  setStartAuthLogin,
  setStopAuthLogin,
} from '../../reducer';

export function* authLogoutWorkerSaga() {
  yield put(setStartAuthLogin());

  try {
    const response = yield call(API.AUTH.LOGOUT);

    yield put(authInit(response));
  } catch (error) {
    console.error('=== Error in authLogoutWorkerSaga ===', error);
  } finally {
    yield put(setStopAuthLogin());
  }
}