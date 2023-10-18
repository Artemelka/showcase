// import { put, call } from 'redux-saga/effects';
// import { MESSAGE_TYPE, wsService, SocketMessage } from '@/services/socket";
// import { addMessage } from '../../reducer';
// import { SendMessageAction } from '../../types';
import { appLogger } from '@/services/app-logger';

/* eslint-disable */
export function* sendMessageSaga({ payload, dispatch }: any) {
  try {
    yield setTimeout(() => {
      return null;
    }, 0);
  } catch (error) {
    appLogger.log('=== Error in sendMessageWorkerSaga ===', error);
  }
}
