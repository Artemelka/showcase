import { take, fork } from 'redux-saga/effects';
import { GET_RESOLVED_TASK_ACTION_SAGA } from '../../actions';
import { getResolvedTaskSaga } from './get-resolved-task-saga';

function* getResolvedTaskWatcherSaga() {
  while (true) {
    yield take(GET_RESOLVED_TASK_ACTION_SAGA);
    yield fork(getResolvedTaskSaga)
  }
}

export const GET_RESOLVED_TASK_INJECT_SAGA_CONFIG = {
  name: 'GET_RESOLVED_TASK_WATCHER_SAGA',
  saga: getResolvedTaskWatcherSaga,
}