import { lazy } from 'react';
import { AppRouteConfig } from '../../../../../types';
import { SNAKE_GAME_CHILDREN_PATH } from '../../constants';

export const SNAKE_MOBX_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./snake-mobx-page')),
  name: 'mobx',
  path: SNAKE_GAME_CHILDREN_PATH.MOBX,
};