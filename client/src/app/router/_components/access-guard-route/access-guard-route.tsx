import React, { FC, memo } from 'react';
import { Route } from 'react-router';
import { NotFoundPage } from '../../../../pages/not-found-page';
import { UserRole } from '../../../types';
import { AppRouterProps } from '../../types';
import { checkAccess } from './_utils';

type AccessGuardRouteProps = Omit<AppRouterProps, 'name'> & {
  accessTypes: Array<UserRole>;
};

export const AccessGuardRouteComponent: FC<AccessGuardRouteProps> = ({
  accessTypes,
  component,
  exact,
  path,
}: AccessGuardRouteProps) => {

  const hasAccess = checkAccess(accessTypes, 'guest');

  return (
    <Route
      component={hasAccess ? component : NotFoundPage}
      exact={exact}
      key={`${path}`}
      path={path}
    />
  );
};

export const AccessGuardRoute = memo(AccessGuardRouteComponent);