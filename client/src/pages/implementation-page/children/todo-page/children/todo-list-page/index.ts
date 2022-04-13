import { AppRouteConfig } from '../../../../../types';
import { TODO_CHILDREN_PATH } from '../../constants';
import { TodoListPage } from './todo-list-page';

export type { TodoStore } from './redux';

export const TODO_LIST_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: TodoListPage,
  exact: true,
  path: TODO_CHILDREN_PATH.LIST,
  name: 'List',
};