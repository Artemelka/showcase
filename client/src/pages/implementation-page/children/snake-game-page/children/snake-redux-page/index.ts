import { lazy } from 'react';
import { AppRouterProps } from '../../../../../types';
import { SNAKE_GAME_CHILDREN_PATH } from '../../constants';

export const SNAKE_REDUX_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: lazy(() => import('./snake-redux-page')),
  name: 'snake-redux',
  path: SNAKE_GAME_CHILDREN_PATH.REDUX,
}