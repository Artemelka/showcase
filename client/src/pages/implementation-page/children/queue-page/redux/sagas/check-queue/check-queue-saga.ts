import { put, select } from 'redux-saga/effects';
import {
  queueRequestCountSelector,
  queueMaxRequestCountSelector,
} from '../../selectors';
import { queueSendTaskActionSaga } from '../../actions';

export function* checkQueueSaga() {
  const requestCount = yield select(queueRequestCountSelector);
  const maxRequestCount = yield select(queueMaxRequestCountSelector);

  if(requestCount < maxRequestCount) {
    yield put(queueSendTaskActionSaga());
  }
}