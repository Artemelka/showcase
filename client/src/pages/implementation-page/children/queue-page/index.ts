import { lazy } from 'react';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { AppRouteConfig } from '../../../types';

export const QUEUE_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./queue-page')),
  exact: true,
  path: IMPLEMENTATION_CHILDREN_PATH.QUEUE,
  name: 'queue',
};
