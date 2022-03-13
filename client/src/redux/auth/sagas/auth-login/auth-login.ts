import { call, put } from 'redux-saga/effects';
import { API } from '@/api';
import {
  authInit,
  setStartAuthLogin,
  setStopAuthLogin,
} from '../../reducer';

export function* authLoginWorkerSaga() {
  yield put(setStartAuthLogin());

  try {
    const { isError, errorMessage, user } = yield call(API.AUTH.LOGIN, { userId: '1' });

    if (isError) {
      console.log('=== response ===', errorMessage);
      throw Error(errorMessage);
    }

    yield put(authInit(user));
  } catch (error) {
    console.error('=== Error authLoginWorkerSaga ===', error);
  } finally {
    yield put(setStopAuthLogin());
  }
}