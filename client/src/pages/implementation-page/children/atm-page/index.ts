import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const ATM_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./atm-page')),
  exact: true,
  name: 'ATM',
  path: IMPLEMENTATION_CHILDREN_PATH.ATM,
};
