import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { GAMES_PAGE_PATH } from './constants';
import { GAMES_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

export const GAMES_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  children: GAMES_CHILDREN_PAGE_ROUTE_CONFIG,
  component: lazy(() => import('./games-page')),
  exact: false,
  name: 'games',
  path: GAMES_PAGE_PATH,
};

export { GAMES_PAGE_PATH } from './constants';
