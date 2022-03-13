import { fork, take } from 'redux-saga/effects';
import { GET_TODO_ITEM_ACTION_NAME } from '../../actions';
import { getItemSaga } from './get-item-saga';

const GET_ITEM_WATCHER_SAGA_NAME = 'GET_ITEM_WATCHER_SAGA';

function* getItemWatcherSaga() {
  while (true) {
    yield take(GET_TODO_ITEM_ACTION_NAME);
    yield fork(getItemSaga);
  }
}

export const GET_TODO_ITEM_SAGA_CONFIG = {
  name: GET_ITEM_WATCHER_SAGA_NAME,
  saga: getItemWatcherSaga
}