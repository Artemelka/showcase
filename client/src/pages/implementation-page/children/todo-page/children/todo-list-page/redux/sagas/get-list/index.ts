import { getListWatcherSaga, GET_LIST_WATCHER_SAGA_NAME } from './get-list-watcher-saga';

export const GET_LIST_SAGA_INJECT_CONFIG = {
  name: GET_LIST_WATCHER_SAGA_NAME,
  saga: getListWatcherSaga,
}