import React, { memo } from 'react';
import {
  StoreInjectorConsumer,
  AsyncReducerItem,
  AsyncSagaItem,
} from '@artemelka/redux-store-injector';
import { AppRoute, AppRouterSwitch } from '@/app/router';
import { Page } from '@/components';
import { TOURNAMENT_CHILDREN_ROUTE_CONFIG } from './children';

const asyncReducers: Array<AsyncReducerItem> = [];
const asyncSagas: Array<AsyncSagaItem> = [];

export const TournamentPageComponent = () => {
  return (
    <Page headTitle="Tournament" title="An example of tournament grid">
      <StoreInjectorConsumer
        asyncReducers={asyncReducers}
        asyncSagas={asyncSagas}
        withEjectReducers
      >
        <AppRouterSwitch>
          {TOURNAMENT_CHILDREN_ROUTE_CONFIG.map(
            ({ component, exact, path }) => (
              <AppRoute
                key={path}
                component={component}
                exact={exact}
                path={path}
              />
            ),
          )}
        </AppRouterSwitch>
      </StoreInjectorConsumer>
    </Page>
  );
};

const TournamentPage = memo(TournamentPageComponent);

export default TournamentPage;
