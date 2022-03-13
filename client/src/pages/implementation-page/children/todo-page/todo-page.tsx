import React, { FC, memo } from 'react';
import { AppRoute, AppRouterSwitch } from '@/app';
import { Page } from '@/components';
import { TODO_CHILDREN_ROUTE_CONFIG } from './children';

const TodoPage: FC = () => (
  <Page headTitle="Todo" title="Todo">
    <AppRouterSwitch>
      {TODO_CHILDREN_ROUTE_CONFIG.map(({ component, exact, path }) => (
        <AppRoute component={component} path={path} key={path} exact={exact}/>
      ))}
    </AppRouterSwitch>
  </Page>
);

export default memo(TodoPage);