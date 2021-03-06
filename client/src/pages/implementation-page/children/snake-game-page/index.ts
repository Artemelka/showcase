import { lazy } from 'react';
import { AppRouterProps } from '../../../types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { SNAKE_GAME_CHILDREN_ROUTES } from './children';

export const SNAKE_GAME_PAGE_ROUTE_CONFIG: AppRouterProps = {
  children: SNAKE_GAME_CHILDREN_ROUTES,
  component: lazy(() => import('./snake-game-page')),
  name: 'snake-game',
  path: IMPLEMENTATION_CHILDREN_PATH.SNAKE_GAME,
}