import { lazy } from 'react';
import { AppRouteConfig } from '@/pages';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const SEMKI_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./semki-page')),
  path: IMPLEMENTATION_CHILDREN_PATH.SEMKI,
  name: 'semki',
};