import React, { FC, memo, ReactNode } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { NotFoundPage } from '../../../../pages';

type AppRouterSwitchProps = {
  children: ReactNode;
  pathToRedirect?: string;
  withNotFoundPage?: boolean;
};

export const AppRouterSwitchComponent: FC<AppRouterSwitchProps> = ({
  children,
  pathToRedirect,
  withNotFoundPage,
}) => {
  return (
    <Switch>
      {children}
      {pathToRedirect && <Redirect to={pathToRedirect}/>}
      {withNotFoundPage && (<Route component={NotFoundPage}/>)}
    </Switch>
  );
};

export const AppRouterSwitch = memo(AppRouterSwitchComponent);