import { lazy } from 'react';
import { AppRouterProps } from '../../../../../types';
import { SNAKE_GAME_CHILDREN_PATH } from '../../constants';

export const SNAKE_HOME_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: lazy(() => import('./snake-home-page')),
  exact: true,
  name: 'home',
  path: SNAKE_GAME_CHILDREN_PATH.HOME,
};