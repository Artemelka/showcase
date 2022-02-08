import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { authUserRoleSelector, AppStoreWithAuth } from '../../../app-layout';
import { NotFoundPage } from '../../../../pages/not-found-page';
import { UserRole } from '../../../../api';
import { AppRouterProps } from '../../types';

type MapStateToProps = {
  userRole: UserRole;
};

type OwnProps = {
  accessTypes: Array<UserRole>;
};

type AccessGuardRouteProps = MapStateToProps &
  Omit<AppRouterProps, 'name'> &
  OwnProps;

export const AccessGuardRouteComponent: FC<AccessGuardRouteProps> = ({
  accessTypes,
  component,
  exact,
  path,
  userRole,
}: AccessGuardRouteProps) => {

  const hasAccess = accessTypes.includes(userRole);

  return (
    <Route
      component={hasAccess ? component : NotFoundPage}
      exact={exact}
      key={`${path}`}
      path={path}
    />
  );
};

const mapStateToProps = (state: AppStoreWithAuth): MapStateToProps => ({
  userRole: authUserRoleSelector(state),
});

export const AccessGuardRoute = connect(mapStateToProps)(AccessGuardRouteComponent);