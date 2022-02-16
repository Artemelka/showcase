import React, {FC, useMemo} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { authUserRoleSelector, AppStoreWithAuth } from '../../../../redux';
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

const mapStateToProps = (state: AppStoreWithAuth): MapStateToProps => ({
  userRole: authUserRoleSelector(state),
});

export const AccessGuardRoute = connect(mapStateToProps)(AccessGuardRouteComponent);