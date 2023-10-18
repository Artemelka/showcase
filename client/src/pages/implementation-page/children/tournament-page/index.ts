import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { TOURNAMENT_CHILDREN_ROUTE_CONFIG } from './children';

export const TOURNAMENT_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  children: TOURNAMENT_CHILDREN_ROUTE_CONFIG,
  component: lazy(() => import('./tournament-page')),
  name: 'tournament',
  path: IMPLEMENTATION_CHILDREN_PATH.TOURNAMENT,
};
