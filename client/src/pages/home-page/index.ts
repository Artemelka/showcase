import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { HOME_PAGE_PATH } from './constants';

export { HOME_PAGE_PATH } from './constants';

export const HOME_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./home-page')),
  exact: true,
  name: 'home',
  path: HOME_PAGE_PATH,
};
