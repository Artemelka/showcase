import { lazy } from 'react';
import { AppRouteConfig } from '@/pages';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { TODO_CHILDREN_ROUTE_CONFIG } from './children';

export type { TodoItemStore, TodoStore } from './children'

export const TODO_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  children: TODO_CHILDREN_ROUTE_CONFIG,
  component: lazy(() => import('./todo-page')),
  path: IMPLEMENTATION_CHILDREN_PATH.TODO,
  name: 'todo',
}