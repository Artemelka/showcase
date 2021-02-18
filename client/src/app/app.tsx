import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { StoreInjectorProvider } from '@artemelka/redux-store-injector';
import { AppLayout } from '../app-layout';
import { appHistory, appStore } from './redux';
import { bootstrapApp } from './_utils/bootstrap-app';

export const App = memo(() => {
  // console.log('=== MOCK ===',process.env.REACT_APP_MOCK);
  bootstrapApp();

  return (
    <Provider store={appStore}>
      <StoreInjectorProvider store={appStore}>
        <ConnectedRouter history={appHistory}>
          <AppLayout/>
        </ConnectedRouter>
      </StoreInjectorProvider>
    </Provider>
  );
});
