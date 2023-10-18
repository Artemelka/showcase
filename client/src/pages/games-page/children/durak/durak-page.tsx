import React, { memo } from 'react';
import {
  AsyncReducerItem,
  StoreInjectorConsumer,
} from '@artemelka/redux-store-injector';
import { Page } from '@/components';
import { DurakGame } from './_components';
import { DURAK_GAME_REDUCER_INJECT_CONFIG } from './_components/durak-game/redux';

const asyncReducers: Array<AsyncReducerItem> = [
  DURAK_GAME_REDUCER_INJECT_CONFIG,
];

export const DurakPageComponent = () => {
  return (
    <Page headTitle="DURAK">
      <StoreInjectorConsumer asyncReducers={asyncReducers} withEjectReducers>
        <DurakGame />
      </StoreInjectorConsumer>
    </Page>
  );
};

export default memo(DurakPageComponent);
