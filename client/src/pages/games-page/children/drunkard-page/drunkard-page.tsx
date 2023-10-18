import React, { memo } from 'react';
import { AppRoute, AppRouterSwitch } from '@/app/router';
import { Page } from '@/components';
import { DRUNKARD_CHILDREN_ROUTES } from './children';

export const DrunkardPage = () => {
  return (
    <Page headTitle="Drunkard" title="Drunkard">
      <AppRouterSwitch>
        {DRUNKARD_CHILDREN_ROUTES.map(({ component, exact, path }) => (
          <AppRoute
            key={path}
            component={component}
            exact={exact}
            path={path}
          />
        ))}
      </AppRouterSwitch>
    </Page>
  );
};

export default memo(DrunkardPage);
