import React, { FC, memo } from 'react';
import { Route } from 'react-router';
import { AppRouterProps } from '../../types';
import { AccessGuardRoute } from '../access-guard-route';

export const AppRouteComponent: FC<Omit<AppRouterProps, 'name'>> = ({
  accessTypes,
  component,
  exact,
  path,
}) => {
  return accessTypes ? (
    <AccessGuardRoute
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