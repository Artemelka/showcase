import { lazy } from 'react';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { AppRouterProps } from '../../../types';

export const ATM_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: lazy(() => import('./atm-page')),
  exact: true,
  name: 'ATM',
  path: IMPLEMENTATION_CHILDREN_PATH.ATM,
};