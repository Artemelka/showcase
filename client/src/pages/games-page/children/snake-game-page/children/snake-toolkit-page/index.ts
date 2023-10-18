import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { SNAKE_GAME_CHILDREN_PATH } from '../../constants';

export const SNAKE_TOOLKIT_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./snake-toolkit-page')),
  name: 'snake-toolkit',
  path: SNAKE_GAME_CHILDREN_PATH.TOOLKIT,
};
