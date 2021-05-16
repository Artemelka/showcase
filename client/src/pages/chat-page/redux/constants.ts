import { ChatState } from './types';

export const CHAT_REDUCER_NAME = 'chat';

export const INITIAL_STATE: ChatState = {
  messages: [],
  user: {
    name: '',
    roomId: '',
    userId: '',
  },
  usersList: [],
}