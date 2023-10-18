import { SendMessageAction } from './types';

export const SEND_MESSAGE_ACTION_SAGA = 'SEND_MESSAGE_ACTION_SAGA';
export const sendMessageActionSaga = (payload: string): SendMessageAction => ({
  type: SEND_MESSAGE_ACTION_SAGA,
  payload,
});
