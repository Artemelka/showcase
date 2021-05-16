import React, { ComponentType, FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { wsService } from './ws-client';
import { SocketInjectConfig, SocketHocProps, SocketConnectCreatorParams } from './types';

export const socketConnectCreator = ({ webSocket }: SocketConnectCreatorParams) =>
  ({ listeners }: SocketInjectConfig) =>
    (WrappedComponent: ComponentType<any> | FC<any>) =>
      connect()(function SocketHoc({ dispatch }: SocketHocProps) {
        useEffect(() => {
          listeners.forEach(({ messageType, action}) => {
            webSocket.on(messageType, action(dispatch));
          });
        }, [dispatch]);

        return <WrappedComponent webSocketRequest={webSocket.request} />;
      });

export const socketConnect = socketConnectCreator({ webSocket: wsService});