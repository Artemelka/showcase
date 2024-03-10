import React, { FC, useMemo } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { AppStore, AppRouterProps } from '@/types';
import { UserRole } from '@/api';
import { authUserRoleSelector } from '@/redux';

const mapStateToProps = (state: AppStore) => ({
  userRole: authUserRoleSelector(state),
});

type OwnProps = {
  accessTypes: Array<UserRole>;
};

type AccessGuardRouteProps = ReturnType<typeof mapStateToProps> &
  Omit<AppRouterProps, 'name'> &
  OwnProps;

export const AccessGuardRouteComponent: FC<AccessGuardRouteProps> = ({
  accessTypes,
  accessRedirectPath = '/',
  component,
  exact,
  path,
  userRole,
}: AccessGuardRouteProps) => {
  const hasAccess = useMemo(
    () => accessTypes.includes(userRole),
    [accessTypes, userRole],
  );

  return hasAccess ? (
    <Route key={`${path}`} component={component} exact={exact} path={path} />
  ) : (
    <Redirect to={accessRedirectPath} />
  );
};

export const AccessGuardRoute = connect(mapStateToProps)(
  AccessGuardRouteComponent,
);
