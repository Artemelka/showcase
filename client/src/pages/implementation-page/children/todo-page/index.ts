import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { TODO_CHILDREN_ROUTE_CONFIG } from './children';

export const TODO_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  children: TODO_CHILDREN_ROUTE_CONFIG,
  component: lazy(() => import('./todo-page')),
  path: IMPLEMENTATION_CHILDREN_PATH.TODO,
  name: 'todo',
};
