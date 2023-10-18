import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const QUEUE_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./queue-page')),
  exact: true,
  path: IMPLEMENTATION_CHILDREN_PATH.QUEUE,
  name: 'queue',
};
