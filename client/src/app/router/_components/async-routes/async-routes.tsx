import React, { memo, Suspense } from 'react';
import { PageLoader } from '@/components';
import { AppRouterProps } from '@/app';
import { AppRoute } from '../app-route';
import { AppRouterSwitch } from '../app-router-switch';

type AsyncRoutesProps = {
  routesConfig: Array<AppRouterProps>;
};

export const AsyncRoutesComponent =  ({ routesConfig }: AsyncRoutesProps) => {
  return (
    <Suspense fallback={<PageLoader/>}>
      <AppRouterSwitch withNotFoundPage >
        {routesConfig.map(({ accessTypes, accessRedirectPath, component, exact, path}) => (
          <AppRoute
            accessRedirectPath={accessRedirectPath}
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