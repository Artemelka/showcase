import { lazy } from 'react';
import { AppRouterProps } from '../../../../../types';
import { SNAKE_GAME_CHILDREN_PATH } from '../../constants';

export const SNAKE_MOBX_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: lazy(() => import('./snake-mobx-page')),
  exact: true,
  name: 'mobx',
  path: SNAKE_GAME_CHILDREN_PATH.MOBX,
};