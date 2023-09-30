import { lazy } from 'react';
import { AppRouteConfig } from '@/pages';
import { GAMES_CHILDREN_PATH } from '../../constants';

export const DRUNKARD_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./drunkard-page')),
  exact: false,
  name: 'Drunkard',
  path: GAMES_CHILDREN_PATH.DRUNKARD,
}