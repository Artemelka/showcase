import { lazy } from 'react';
import { AppRouteConfig } from '../../../../../types';
import { SNAKE_GAME_CHILDREN_PATH } from '../../constants';

export const SNAKE_PURE_REACT_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./snake-pure-react-page')),
  name: 'snake',
  path: SNAKE_GAME_CHILDREN_PATH.REACT,
}