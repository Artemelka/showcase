import React, { memo } from 'react';
import { Page, AsyncRoutes } from '../../../../components';
import { SNAKE_GAME_CHILDREN_ROUTES } from './children';

const SnakeGamePage = () => {
  return (
    <Page headTitle="SnakeGame" title="SnakeGame">
      <AsyncRoutes routesConfig={SNAKE_GAME_CHILDREN_ROUTES}/>
    </Page>
  );
};

export default memo(SnakeGamePage);