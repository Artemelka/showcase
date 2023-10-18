import React, { FC, memo, ReactNode } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../history';

type Props = { children: ReactNode };

export const AppRouterProviderComponent: FC<Props> = ({ children }) => {
  return <ConnectedRouter history={history}>{children}</ConnectedRouter>;
};

export const AppRouterProvider = memo<Props>(AppRouterProviderComponent);
