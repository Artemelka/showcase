import { lazy } from 'react';
import { GAMES_PAGE_PATH } from './constants';
import { GAMES_CHILDREN_PAGE_ROUTE_CONFIG } from './children';
import { AppRouteConfig } from '../types';

export const GAMES_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  children: GAMES_CHILDREN_PAGE_ROUTE_CONFIG,
  component: lazy(() => import('./games-page')),
  name: 'games',
  path: GAMES_PAGE_PATH,
}

export { GAMES_PAGE_PATH, GAMES_CHILDREN_PATH } from './constants';