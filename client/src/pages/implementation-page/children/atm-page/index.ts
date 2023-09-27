import { lazy } from 'react';
import { AppRouteConfig } from '@/pages';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const ATM_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./atm-page')),
  exact: true,
  name: 'ATM',
  path: IMPLEMENTATION_CHILDREN_PATH.ATM,
};