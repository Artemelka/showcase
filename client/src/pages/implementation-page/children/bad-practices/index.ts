import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const BAD_PRACTICES_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./bad-practices-page')),
  exact: true,
  name: 'bad practices',
  path: IMPLEMENTATION_CHILDREN_PATH.BAD_PRACTICES,
};
