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
      {withNotFoundPage && (<Route component={NotFoundPage}/>)}
      {pathToRedirect && <Redirect to={pathToRedirect}/>}
    </Switch>
  );
};

export const AppRouterSwitch = memo(AppRouterSwitchComponent);