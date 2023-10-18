import { take, fork } from 'redux-saga/effects';
import { CHECK_QUEUE_ACTION_SAGA } from '../../actions';
import { checkQueueSaga } from './check-queue-saga';

function* checkQueueWatcherSaga() {
  while (true) {
    yield take(CHECK_QUEUE_ACTION_SAGA);
    yield fork(checkQueueSaga);
  }
}

export const CHECK_QUEUE_INJECT_SAGA_CONFIG = {
  name: 'CHECK_QUEUE_WATCHER_SAGA',
  saga: checkQueueWatcherSaga,
};
