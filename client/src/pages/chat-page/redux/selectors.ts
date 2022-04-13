import { createSelector } from 'reselect';
import { INITIAL_STATE, CHAT_REDUCER_NAME } from './constants';
import { ChatStore, ChatMessage, ChatUser } from './types';

const chatSelector = (store: ChatStore) => store[CHAT_REDUCER_NAME] || INITIAL_STATE;

export const messageSelector = createSelector(
  [chatSelector],
  (chatState): Array<ChatMessage> => chatState.messages
);

export const userSelector = createSelector(
  [chatSelector],
  (chatState): ChatUser => chatState.user
);

export const usersListSelector = createSelector(
  [chatSelector],
  (chatState): Array<ChatUser> => chatState.usersList
);