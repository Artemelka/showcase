import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const TYRES_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./tyres-page')),
  path: IMPLEMENTATION_CHILDREN_PATH.TYRES,
  name: 'tyres',
};
