import React, { FC } from 'react';
import { RoutesPage } from '@/components';
import { PAGES_PATH } from "@/pages/constants";
import { GAMES_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

const GamesPage: FC = () => (
  <RoutesPage
    targetPath={PAGES_PATH.GAMES}
    routesConfig={GAMES_CHILDREN_PAGE_ROUTE_CONFIG}
  />
);

export default GamesPage;