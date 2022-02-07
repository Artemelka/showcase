import { lazy } from 'react';
import { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from './children';
import { IMPLEMENTATION_PAGE_PATH, IMPLEMENTATION_CHILDREN_PATH } from './constants';
import { AppRouteConfig } from '../types';

export const IMPLEMENTATION_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  children: IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG,
  component: lazy(() => import('./implementation-page')),
  name: 'implementation',
  path: IMPLEMENTATION_PAGE_PATH,
};

export { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from './children';
export { IMPLEMENTATION_PAGE_PATH, IMPLEMENTATION_CHILDREN_PATH };
