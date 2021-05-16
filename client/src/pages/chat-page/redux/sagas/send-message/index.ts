import { AsyncSagaItem } from '@artemelka/redux-store-injector';
import { sendMessageWatcherSaga, SEND_MESSAGE_WATCHER_SAGA_NAME } from './send-message-watcher-saga';

export const CHAT_SEND_MESSAGE_INJECT_SAGA_CONFIG: AsyncSagaItem = {
  saga: sendMessageWatcherSaga,
  name: SEND_MESSAGE_WATCHER_SAGA_NAME,
};