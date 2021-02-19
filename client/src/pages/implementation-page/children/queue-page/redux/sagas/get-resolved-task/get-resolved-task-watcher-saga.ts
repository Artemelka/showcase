import { take, fork } from 'redux-saga/effects';
import { GET_RESOLVED_TASK } from '../../actions';
import { getResolvedTaskWorkerSaga } from './get-resolved-task-worker-saga';

export const GET_RESOLVED_TASK_WATCHER_SAGA_NAME = 'GET_RESOLVED_TASK_WATCHER_SAGA';

export function* getResolvedTaskWatcherSaga() {
  while (true) {
    yield take(GET_RESOLVED_TASK);
    yield fork(getResolvedTaskWorkerSaga)
  }
}