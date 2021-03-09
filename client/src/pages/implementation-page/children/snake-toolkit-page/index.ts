import { lazy } from 'react';
import { AppRouterProps } from '../../../types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const SNAKE_TOOLKIT_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: lazy(() => import('./snake-toolkit-page')),
  name: 'snake-toolkit',
  path: IMPLEMENTATION_CHILDREN_PATH.SNAKE_TOOLKIT,
}