import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from './implementation-page';
import { IMPLEMENTATION_PAGE_PATH } from './constants';

export const IMPLEMENTATION_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  children: IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG,
  component: lazy(() => import('./implementation-page')),
  name: 'implementation',
  path: IMPLEMENTATION_PAGE_PATH,
};

export { IMPLEMENTATION_PAGE_PATH };
