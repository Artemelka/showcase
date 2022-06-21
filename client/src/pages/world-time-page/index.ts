import { lazy } from 'react';
import { WORLD_TIME_PAGE_PATH } from './constants';
import { AppRouteConfig } from '../types';

export { WORLD_TIME_PAGE_PATH } from './constants';

export const WORLD_TIME_PAGE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./world-time-page')),
  exact: true,
  name: 'world-time',
  path: WORLD_TIME_PAGE_PATH,
}