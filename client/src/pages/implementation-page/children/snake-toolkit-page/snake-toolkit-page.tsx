import React, { memo } from 'react';
import { AsyncReducerItem, AsyncSagaItem, StoreInjectorConsumer } from '@artemelka/redux-store-injector';
import { Page } from '../../../../components';
import { Game } from './_components';
import {
  GAME_REDUCER_INJECT_CONFIG,
  GAME_START_INJECT_SAGA_CONFIG,
  GAME_STEP_INJECT_SAGA_CONFIG,
} from './redux';

const asyncReducers: Array<AsyncReducerItem> = [GAME_REDUCER_INJECT_CONFIG];
const asyncSagas: Array<AsyncSagaItem> = [GAME_START_INJECT_SAGA_CONFIG, GAME_STEP_INJECT_SAGA_CONFIG];

const SnakeToolkitPage = memo(() => {
  return (
    <StoreInjectorConsumer asyncReducers={asyncReducers} asyncSagas={asyncSagas} withEjectReducers>
      <Page title="Snake toolkit">
        <Game/>
      </Page>
    </StoreInjectorConsumer>
  );
});

export default SnakeToolkitPage;