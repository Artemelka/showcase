import { fork, take } from 'redux-saga/effects';
import { GET_TODO_ITEM_ACTION_NAME } from '../../actions';
import { getItemWorkerSaga } from './get-item-worker-saga';

export const GET_ITEM_WATCHER_SAGA_NAME = 'GET_ITEM_WATCHER_SAGA';

export function* getItemWatcherSaga() {
  while (true) {
    yield take(GET_TODO_ITEM_ACTION_NAME);
    yield fork(getItemWorkerSaga);
  }
}