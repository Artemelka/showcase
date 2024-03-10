import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { WORLD_TIME_PAGE_PATH } from './constants';

export { WORLD_TIME_PAGE_PATH } from './constants';

export const WORLD_TIME_PAGE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./world-time-page')),
  exact: true,
  name: 'world-time',
  path: WORLD_TIME_PAGE_PATH,
};
