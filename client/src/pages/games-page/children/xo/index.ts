import { lazy } from 'react';
import { AppRouteConfig } from '@/pages';
import { GAMES_CHILDREN_PATH } from '../../constants';

export const XO_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./xo-page')),
  path: GAMES_CHILDREN_PATH.XO,
  name: 'XO',
}