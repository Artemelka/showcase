import React, { memo } from 'react';
import { AppRoute, AppRouterSwitch } from '@/app/router';
import { Page } from '@/components';
import { TOURNAMENT_CHILDREN_ROUTE_CONFIG } from './children';

export const TournamentPageComponent = () => {
  return (
    <Page
      headTitle="Tournament"
      title="An example of tournament grid"
    >
      <AppRouterSwitch>
        {TOURNAMENT_CHILDREN_ROUTE_CONFIG.map(({ component, exact, path }) => (
          <AppRoute component={component} path={path} key={path} exact={exact}/>
        ))}
      </AppRouterSwitch>
    </Page>
  );
};

const TournamentPage = memo(TournamentPageComponent);

export default TournamentPage;