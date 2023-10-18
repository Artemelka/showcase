import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { GAMES_CHILDREN_PATH } from '../../constants';
import { SNAKE_GAME_CHILDREN_ROUTES } from './children';

export type { GameReduxStore, GameToolkitStore } from './types';

export const SNAKE_GAME_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  children: SNAKE_GAME_CHILDREN_ROUTES,
  component: lazy(() => import('./snake-game-page')),
  name: 'snake-game',
  path: GAMES_CHILDREN_PATH.SNAKE_GAME,
};
