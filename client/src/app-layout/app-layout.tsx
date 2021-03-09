import React, { memo } from 'react';
import { Layout } from '@artemelka/react-components';
import { AsyncRoutes } from '../components';
import { APP_PAGES_ROUTE_CONFIG } from '../pages';
import { AppHeader } from './_components/app-header';

export const AppLayout = memo(() => {
  return (
    <Layout
      disabledScroll
      headerElement={<AppHeader/>}
    >
      <AsyncRoutes routesConfig={APP_PAGES_ROUTE_CONFIG}/>
    </Layout>
  );
});
