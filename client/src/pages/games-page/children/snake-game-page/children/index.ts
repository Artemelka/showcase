import type { AppRouteConfig } from '@/types';
import { SNAKE_HOME_PAGE_ROUTE_CONFIG } from './snake-home-page';
import { SNAKE_PURE_REACT_PAGE_ROUTE_CONFIG } from './snake-pure-react';
import { SNAKE_REDUX_PAGE_ROUTE_CONFIG } from './snake-redux-page';
import { SNAKE_TOOLKIT_PAGE_ROUTE_CONFIG } from './snake-toolkit-page';
import { SNAKE_MOBX_PAGE_ROUTE_CONFIG } from './snake-mobx-page';

export const SNAKE_GAME_CHILDREN_ROUTES: Array<AppRouteConfig> = [
  SNAKE_HOME_PAGE_ROUTE_CONFIG,
  SNAKE_PURE_REACT_PAGE_ROUTE_CONFIG,
  SNAKE_REDUX_PAGE_ROUTE_CONFIG,
  SNAKE_TOOLKIT_PAGE_ROUTE_CONFIG,
  SNAKE_MOBX_PAGE_ROUTE_CONFIG,
];
