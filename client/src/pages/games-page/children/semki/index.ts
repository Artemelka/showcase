import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { GAMES_CHILDREN_PATH } from '../../constants';

export const SEMKI_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./semki-page')),
  path: GAMES_CHILDREN_PATH.SEMKI,
  name: 'semki',
};
