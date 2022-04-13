import React, { FC, useMemo } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { AppStore } from '@/app';
import { AppRouterProps } from '@/app/router';
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

  const hasAccess = useMemo(() => accessTypes.includes(userRole), [accessTypes, userRole]);

  return hasAccess ? (
    <Route
      component={component}
      exact={exact}
      key={`${path}`}
      path={path}
    />
  ) : (
    <Redirect to={accessRedirectPath}/>
  );
};

export const AccessGuardRoute = connect(mapStateToProps)(AccessGuardRouteComponent);