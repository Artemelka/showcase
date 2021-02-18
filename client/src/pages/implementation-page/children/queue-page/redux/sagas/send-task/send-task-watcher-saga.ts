import { take, fork } from 'redux-saga/effects';
import { QUEUE_SEND_TASK } from '../../actions';
import { sendTaskWorkerSaga } from './send-task-worker-saga';

export const SEND_TASK_WATCHER_SAGA_NAME = 'SEND_TASK_WATCHER_SAGA';

export function* sendTaskWatcherSaga() {
  while (true) {
    yield take(QUEUE_SEND_TASK);
    yield fork(sendTaskWorkerSaga);
  }
}

