import { fork, take } from 'redux-saga/effects';
import { GET_LIST_SAGA } from '../../actions';
import { getListWorkerSaga } from './get-list-worker-saga';

export const GET_LIST_WATCHER_SAGA_NAME = 'GET_LIST_WATCHER_SAGA';

export function* getListWatcherSaga() {
  while (true) {
    yield take(GET_LIST_SAGA);
    yield fork(getListWorkerSaga);
  }
}