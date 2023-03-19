import { lazy } from 'react';
import { AppRouteConfig } from '@/pages';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const TYRES_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./tyres-page')),
  path: IMPLEMENTATION_CHILDREN_PATH.TYRES,
  name: 'tyres',
};