import { GET_ITEM_WATCHER_SAGA_NAME, getItemWatcherSaga } from './get-item-watcher-saga';

export const GET_TODO_ITEM_SAGA_CONFIG = {
  name: GET_ITEM_WATCHER_SAGA_NAME,
  saga: getItemWatcherSaga
}