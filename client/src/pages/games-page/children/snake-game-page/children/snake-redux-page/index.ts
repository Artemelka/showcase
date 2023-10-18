import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { SNAKE_GAME_CHILDREN_PATH } from '../../constants';

export const SNAKE_REDUX_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./snake-redux-page')),
  name: 'snake-redux',
  path: SNAKE_GAME_CHILDREN_PATH.REDUX,
};
