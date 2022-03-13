import { fork, take } from 'redux-saga/effects';
import { GET_LIST_SAGA } from '../../actions';
import { getListSaga } from './get-list-saga';

const GET_LIST_WATCHER_SAGA_NAME = 'GET_LIST_WATCHER_SAGA';

function* getListWatcherSaga() {
  while (true) {
    yield take(GET_LIST_SAGA);
    yield fork(getListSaga);
  }
}

export const GET_LIST_SAGA_INJECT_CONFIG = {
  name: GET_LIST_WATCHER_SAGA_NAME,
  saga: getListWatcherSaga,
}