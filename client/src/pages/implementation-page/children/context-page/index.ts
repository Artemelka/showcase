import { lazy } from 'react';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { AppRouteConfig } from '../../../types';

export const CONTEXT_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./context-page')),
  exact: true,
  name: 'Context',
  path: IMPLEMENTATION_CHILDREN_PATH.CONTEXT,
};