// import { put, call } from 'redux-saga/effects';
// import { MESSAGE_TYPE, wsService, SocketMessage } from '@/services/socket";
// import { addMessage } from '../../reducer';
// import { SendMessageAction } from '../../types';

export function* sendMessageSaga({ payload, dispatch }: any) {

  try {

    yield setTimeout(() => {}, 0);
  } catch (error) {
    console.log('=== Error in sendMessageWorkerSaga ===', error);
  }
}
