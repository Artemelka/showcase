import { Dispatch } from 'redux';
import { wsService } from './ws-client';

export enum MESSAGE_TYPE {
  PING_REQUEST = 'PING_REQUEST',
  PING_RESPONSE = 'PING_RESPONSE',
  CHAT_NEW_MESSAGE = 'CHAT_NEW_MESSAGE',
  CHAT_SEND_MESSAGE = 'CHAT_SEND_MESSAGE',
  CHAT_SET_USER = 'CHAT_SET_USER',
  CHAT_NEW_USER = 'CHAT_NEW_USER',
  CHAT_USER_LEFT = 'CHAT_USER_LEFT',
}

export type PingMessagePayload = { timestamp: number };
export type SocketMessage<T> = {
  timestamp: number;
  type: MESSAGE_TYPE;
  payload: T;
};
export type SocketMessageListener = (message: SocketMessage<any>) => void;
export type ListenersMap = Partial<Record<MESSAGE_TYPE, Array<SocketMessageListener>>>;
export type WebSocketRequest = <M>(message: SocketMessage<M>) => void;

export type SocketListeners = {
  messageType: MESSAGE_TYPE,
  action: (dispatch: Dispatch) => (socketMessage: SocketMessage<any>) => void;
};
export type SocketInjectConfig = {
  listeners: Array<SocketListeners>
}

export type SocketHocProps = {
  dispatch: Dispatch
};

export type SocketConnectCreatorParams = {
  webSocket: typeof wsService;
};

