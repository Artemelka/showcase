import React, { FC } from 'react';
import { RoutesPage } from '@/components';
import { GAMES_PAGE_PATH } from './constants';
import { GAMES_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

const GamesPage: FC = () => (
  <RoutesPage
    targetPath={GAMES_PAGE_PATH}
    routesConfig={GAMES_CHILDREN_PAGE_ROUTE_CONFIG}
  />
);

export default GamesPage;