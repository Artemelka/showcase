import React, { memo } from 'react';
import { Route, Switch } from 'react-router';
import { Page } from '../../../../components';
import { NotFoundPage } from '../../../not-found-page';
import { TODO_CHILDREN_ROUTE_CONFIG } from './children';

const TodoPage = memo(() => (
  <Page title="Todo">
    <Switch>
      {TODO_CHILDREN_ROUTE_CONFIG.map(({ component, exact, path }) => (
        <Route component={component} path={path} key={path} exact={exact}/>
      ))}
      <Route component={NotFoundPage}/>
    </Switch>
  </Page>
));

export default TodoPage;