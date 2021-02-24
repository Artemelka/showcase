import { AppRouterProps } from '../../../types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { TODO_CHILDREN_ROUTE_CONFIG } from './children';
import { TodoPage } from './todo-page';

export const TODO_PAGE_ROUTE_CONFIG: AppRouterProps = {
  children: TODO_CHILDREN_ROUTE_CONFIG,
  component: TodoPage,
  path: IMPLEMENTATION_CHILDREN_PATH.TODO,
  name: 'todo',
}