import React, { memo, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from '@artemelka/react-components';
import { PageLoader } from '../components';
import { APP_PAGES_ROUTE_CONFIG, NotFoundPage } from '../pages';
import { AppRouterProps } from '../pages/types';
import { AppHeader } from './_components/app-header';

export const AppLayout = memo(() => {
  return (
    <Layout
      disabledScroll
      headerElement={<AppHeader/>}
    >
      <Suspense fallback={<PageLoader/>}>
        <Switch>
          {APP_PAGES_ROUTE_CONFIG.map((({ component, exact, path}: AppRouterProps) => (
            <Route
              component={component}
              exact={exact}
              key={`${path}`}
              path={path}
            />
          )))}
          <Route component={NotFoundPage}/>
        </Switch>
      </Suspense>
    </Layout>
  );
});
