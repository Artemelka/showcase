import React, { FC, memo } from 'react';
import { Route } from 'react-router';
import { AppRouterProps } from '@/app';
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
      accessRedirectPath={accessRedirectPath}
      accessTypes={accessTypes}
      component={component}
      exact={exact}
      key={`${path}`}
      path={path}
    />
  ) : (
    <Route
      component={component}
      exact={exact}
      key={`${path}`}
      path={path}
    />
  );
};

export const AppRoute = memo(AppRouteComponent);