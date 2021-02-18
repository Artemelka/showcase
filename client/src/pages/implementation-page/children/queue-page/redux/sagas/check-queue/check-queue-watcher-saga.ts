import { take, fork } from 'redux-saga/effects';
import { CHECK_QUEUE } from '../../actions';
import { checkQueueWorkerSaga } from './check-queue-worker-saga';

export const CHECK_QUEUE_WATCHER_SAGA_NAME = 'CHECK_QUEUE_WATCHER_SAGA';

export function* checkQueueWatcherSaga() {
  while (true) {
    yield take(CHECK_QUEUE);
    yield fork(checkQueueWorkerSaga);
  }
}