import React, { memo, useEffect } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { wsService } from '../services/socket';
import { AppLayout, ReduxProvider } from './_components';
import { history } from './router';

import { bootstrapApp } from './_utils/bootstrap-app';

export const AppComponent = () => {
  // console.log('=== MOCK ===',process.env.REACT_APP_MOCK);
  bootstrapApp();

  useEffect(() => {
    wsService.connect();
    return () => {
      wsService.disconnect();
    };
  }, []);

  return (
    <ReduxProvider>
      <ConnectedRouter history={history}>
        <AppLayout/>
      </ConnectedRouter>
    </ReduxProvider>
  );
}

export const App = memo(AppComponent);