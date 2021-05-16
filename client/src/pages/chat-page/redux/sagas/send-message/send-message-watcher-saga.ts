import { fork, take } from 'redux-saga/effects';
import { SEND_MESSAGE_ACTION_SAGA } from '../../actions';
import { sendMessageWorkerSaga } from './send-message-worker-saga';

export const SEND_MESSAGE_WATCHER_SAGA_NAME = 'SEND_MESSAGE_WATCHER_SAGA';
export function* sendMessageWatcherSaga() {
  while (true) {
    const payload = yield take(SEND_MESSAGE_ACTION_SAGA);
    yield fork(sendMessageWorkerSaga, payload);
  }
}