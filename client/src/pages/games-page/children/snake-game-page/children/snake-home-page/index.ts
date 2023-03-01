import { lazy } from 'react';
import { AppRouteConfig } from '../../../../../types';
import { SNAKE_GAME_CHILDREN_PATH } from '../../constants';

export const SNAKE_HOME_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./snake-home-page')),
  exact: true,
  name: 'home',
  path: SNAKE_GAME_CHILDREN_PATH.HOME,
};