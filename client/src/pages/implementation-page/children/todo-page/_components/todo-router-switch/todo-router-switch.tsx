import React, { memo } from 'react';
import { AppRoute, AppRouterSwitch } from '@/app/router';
import { TODO_CHILDREN_ROUTE_CONFIG } from '../../children';

export const TodoRouterSwitchComponent = () => {
  return (
    <AppRouterSwitch>
      {TODO_CHILDREN_ROUTE_CONFIG.map(({ component, exact, path }) => (
        <AppRoute key={path} component={component} exact={exact} path={path} />
      ))}
    </AppRouterSwitch>
  );
};

export const TodoRouterSwitch = memo(TodoRouterSwitchComponent);
