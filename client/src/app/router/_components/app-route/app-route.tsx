import React, { FC, memo } from 'react';
import { Route } from 'react-router';
import { AppRouterProps } from '@/types';
import { AccessGuardRoute } from '../access-guard-route';

export const AppRouteComponent: FC<Omit<AppRouterProps, 'name'>> = ({
  accessRedirectPath,
  accessTypes,
  component,
  exact,
  path,
}) => {
  return accessTypes ? (
    <AccessGuardRoute
      key={`${path}`}
      accessRedirectPath={accessRedirectPath}
      accessTypes={accessTypes}
      component={component}
      exact={exact}
      path={path}
    />
  ) : (
    <Route key={`${path}`} component={component} exact={exact} path={path} />
  );
};

export const AppRoute = memo(AppRouteComponent);
