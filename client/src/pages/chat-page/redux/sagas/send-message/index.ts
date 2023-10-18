import { fork, take } from 'redux-saga/effects';
import { AsyncSagaItem } from '@artemelka/redux-store-injector';
import { SEND_MESSAGE_ACTION_SAGA } from '../../actions';
import { sendMessageSaga } from './send-message-saga';

function* sendMessageWatcherSaga() {
  while (true) {
    const payload = yield take(SEND_MESSAGE_ACTION_SAGA);
    yield fork(sendMessageSaga, payload);
  }
}

export const CHAT_SEND_MESSAGE_INJECT_SAGA_CONFIG: AsyncSagaItem = {
  name: 'SEND_MESSAGE_WATCHER_SAGA',
  saga: sendMessageWatcherSaga,
};
