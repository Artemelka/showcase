import { lazy } from 'react';
import { HOME_PAGE_PATH } from './constants';
import { AppRouteConfig } from '../types';

export { HOME_PAGE_PATH } from './constants';

export const HOME_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./home-page')),
  exact: true,
  name: 'home',
  path: HOME_PAGE_PATH,
};
