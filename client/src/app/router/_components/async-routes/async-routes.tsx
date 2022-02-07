import React, { memo, Suspense } from 'react';
import { PageLoader } from '../../../../components/page-loader';
import { AppRouterProps } from '../../types';
import { AppRoute } from '../app-route';
import { AppRouterSwitch } from '../app-router-switch';

type AsyncRoutesProps = {
  routesConfig: Array<AppRouterProps>;
};

export const AsyncRoutesComponent =  ({ routesConfig }: AsyncRoutesProps) => {
  return (
    <Suspense fallback={<PageLoader/>}>
      <AppRouterSwitch>
        {routesConfig.map(({ accessTypes, component, exact, path}) => (
          <AppRoute
            accessTypes={accessTypes}
            component={component}
            exact={exact}
            key={`${path}`}
            path={path}
          />
        ))}
      </AppRouterSwitch>
    </Suspense>
  );
};

export const AsyncRoutes = memo(AsyncRoutesComponent);