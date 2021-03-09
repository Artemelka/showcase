import { lazy } from 'react';
import { AppRouterProps } from '../../../types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const SNAKE_REDUX_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: lazy(() => import('./snake-redux-page')),
  name: 'snake-redux',
  path: IMPLEMENTATION_CHILDREN_PATH.SNAKE_REDUX,
}