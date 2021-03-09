import React, { memo, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { Page, PageLoader } from '../../../../components';
import { NotFoundPage } from '../../../not-found-page';
import { SNAKE_GAME_CHILDREN_ROUTES } from './children';

const SnakeGamePage = memo(() => {
  return (
    <Page title="SnakeGame">
      <Suspense fallback={<PageLoader/>}>
        <Switch>
          {SNAKE_GAME_CHILDREN_ROUTES.map(({ component, exact, path }) => (
            <Route component={component} path={path} key={path} exact={exact}/>
          ))}
          <Route component={NotFoundPage}/>
        </Switch>
      </Suspense>
    </Page>
  );
});

export default SnakeGamePage;