import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { GAMES_CHILDREN_PATH } from '../../constants';

export const DURAK_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./durak-page')),
  path: GAMES_CHILDREN_PATH.DURAK,
  name: 'durak',
};
