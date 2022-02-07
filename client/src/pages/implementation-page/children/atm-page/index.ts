import { lazy } from 'react';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { AppRouteConfig } from '../../../types';

export const ATM_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./atm-page')),
  exact: true,
  name: 'ATM',
  path: IMPLEMENTATION_CHILDREN_PATH.ATM,
};