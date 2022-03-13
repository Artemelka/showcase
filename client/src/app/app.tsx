import React, { memo } from 'react';
import { APP_PAGES_ROUTE_CONFIG } from '@/pages';
import { AppLayout } from './app-layout';
import { ReduxProvider } from './redux';
import { AppRouterProvider } from './router';

import { bootstrapApp } from './_utils/bootstrap-app';

export const AppComponent = () => {
  // console.log('=== MOCK ===', process.env.REACT_APP_MOCK);
  bootstrapApp();

  return (
    <ReduxProvider>
      <AppRouterProvider>
        <AppLayout routesConfig={APP_PAGES_ROUTE_CONFIG} />
      </AppRouterProvider>
    </ReduxProvider>
  );
}

export const App = memo(AppComponent);