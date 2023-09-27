import { lazy } from 'react';
import { AppRouteConfig } from '@/pages';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const FLAT_TO_NESTED_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./flat-to-nested-page')),
  exact: true,
  name: 'Flat to nested',
  path: IMPLEMENTATION_CHILDREN_PATH.FLAT_TO_NESTED,
}