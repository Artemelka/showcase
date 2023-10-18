import React, { ComponentType, memo } from 'react';
import { wsService } from './ws-client';
import { SocketListeners, WebSocketRequest, SocketHocProps } from './types';

type SocketConnectCreatorParams = {
  webSocket: typeof wsService;
};

export const createSocketConnectHoc =
  ({ webSocket }: SocketConnectCreatorParams) =>
  (WrappedComponent: ComponentType<SocketHocProps>) => {
    return memo(function SocketHoc(props) {
      const addSocketListeners = (listeners: SocketListeners) => {
        listeners.forEach(({ messageType, action }) => {
          webSocket.on(messageType, action);
        });
      };

      const handleSocketSend: WebSocketRequest = (message) => {
        webSocket.request(message);
      };

      return (
        <WrappedComponent
          addSocketListeners={addSocketListeners}
          webSocketRequest={handleSocketSend}
          /* eslint-disable react/jsx-props-no-spreading */
          {...props}
        />
      );
    });
  };

export const socketConnect = createSocketConnectHoc({ webSocket: wsService });
