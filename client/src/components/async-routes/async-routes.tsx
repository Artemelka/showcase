import React, { memo, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { PageLoader } from '../page-loader';
import { NotFoundPage } from '../../pages/not-found-page';
import { AppRouterProps } from '../../pages/types';

type AsyncRoutesProps = {
  routesConfig: Array<AppRouterProps>;
};

export const AsyncRoutes = memo(function AsyncRoutesComponent({ routesConfig }: AsyncRoutesProps) {
  return (
    <Suspense fallback={<PageLoader/>}>
      <Switch>
        {routesConfig.map(({ component, exact, path}) => (
          <Route
            component={component}
            exact={exact}
            key={`${path}`}
            path={path}
          />
        ))}
        <Route component={NotFoundPage}/>
      </Switch>
    </Suspense>
  );
});