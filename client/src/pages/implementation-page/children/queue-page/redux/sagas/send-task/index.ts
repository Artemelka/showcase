import { take, fork } from 'redux-saga/effects';
import { QUEUE_SEND_TASK_ACTION_SAGA } from '../../actions';
import { sendTaskSaga } from './send-task-saga';

function* sendTaskWatcherSaga() {
  while (true) {
    yield take(QUEUE_SEND_TASK_ACTION_SAGA);
    yield fork(sendTaskSaga);
  }
}

export const SEND_TASK_INJECT_SAGA_CONFIG = {
  name: 'SEND_TASK_WATCHER_SAGA',
  saga: sendTaskWatcherSaga,
};