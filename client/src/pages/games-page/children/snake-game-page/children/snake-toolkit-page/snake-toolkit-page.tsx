import React, { memo } from 'react';
import {
  AsyncReducerItem,
  AsyncSagaItem,
  StoreInjectorConsumer,
} from '@artemelka/redux-store-injector';
import { Game } from './_components';
import {
  GAME_REDUCER_INJECT_CONFIG,
  GAME_START_INJECT_SAGA_CONFIG,
  GAME_STEP_INJECT_SAGA_CONFIG,
} from './redux';

const asyncReducers: Array<AsyncReducerItem> = [GAME_REDUCER_INJECT_CONFIG];
const asyncSagas: Array<AsyncSagaItem> = [
  GAME_START_INJECT_SAGA_CONFIG,
  GAME_STEP_INJECT_SAGA_CONFIG,
];

const SnakeToolkitPage = () => {
  return (
    <StoreInjectorConsumer
      asyncReducers={asyncReducers}
      asyncSagas={asyncSagas}
      withEjectReducers
    >
      <Game />
    </StoreInjectorConsumer>
  );
};

export default memo(SnakeToolkitPage);
