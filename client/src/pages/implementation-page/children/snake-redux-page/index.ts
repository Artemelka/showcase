import { lazy } from 'react';
import { AppRouterProps } from '../../../types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const SNAKE_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: lazy(() => import('./snake-page')),
  name: 'snake',
  path: IMPLEMENTATION_CHILDREN_PATH.SNAKE,
}