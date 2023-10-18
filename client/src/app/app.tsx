import React from 'react';
import { APP_PAGES_ROUTE_CONFIG } from '@/pages';
import { AppLayout } from '@/app/app-layout';
import { ReduxProvider } from '@/app/redux';
import { AppRouterProvider } from '@/app/router';
import { bootstrapApp } from './_utils/bootstrap-app';

export const App = () => {
  // console.log('=== MOCK ===', process.env.REACT_APP_MOCK);
  // console.log('=== NODE_ENV ===', process.env.NODE_ENV);
  bootstrapApp();

  return (
    <ReduxProvider>
      <AppRouterProvider>
        <AppLayout routesConfig={APP_PAGES_ROUTE_CONFIG} />
      </AppRouterProvider>
    </ReduxProvider>
  );
};
