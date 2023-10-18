import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { GAMES_CHILDREN_PATH } from '../../constants';

export const TIC_TAC_TOE_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./tic-tac-toe-page')),
  exact: false,
  name: 'Tic-tac-toe',
  path: GAMES_CHILDREN_PATH.TIC_TAC_TOE,
};
