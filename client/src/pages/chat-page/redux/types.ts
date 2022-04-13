import { BaseAction } from '@/app';
import { CHAT_REDUCER_NAME } from './constants';

type BaseMessage = {
  timestamp: number,
}
export type ChatMessage = {
  id: string,
  text: string,
  time?: string,
  user: string,
  userId: string,
}

export type ChatUser = {
  name: string;
  roomId: string;
  userId: string;
};

export type ChatSetUser = {
  user: ChatUser;
  usersList: Array<ChatUser>;
}

export type ChatUserLeft = {
  usersList: Array<ChatUser>;
}

export type ChatState = {
  messages: Array<ChatMessage>;
  user: ChatUser,
  usersList: Array<ChatUser>;
};

export type SendMessageAction = BaseAction<string>;
export type AddMessageAction = BaseAction<ChatMessage>;
export type SetUserAction = BaseAction<ChatUser>;
export type SetUsersListAction = BaseAction<Array<ChatUser>>;

export type ChatReducerCase = {
  addMessage: (state: ChatState, payload: AddMessageAction) => void;
  setUser: (state: ChatState, payload: SetUserAction) => void;
  setUsersList: (state: ChatState, payload: SetUsersListAction) => void;
  addInUserList: (state: ChatState, payload: SetUserAction) => void;
};

export type ChatStore = { [CHAT_REDUCER_NAME]: ChatState };