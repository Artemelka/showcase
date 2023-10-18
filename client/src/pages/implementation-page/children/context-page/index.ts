import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const CONTEXT_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./context-page')),
  exact: true,
  name: 'Context',
  path: IMPLEMENTATION_CHILDREN_PATH.CONTEXT,
};
