import { AppRouterProps } from '../../../../../types';
import { TODO_CHILDREN_PATH } from '../../constants';
import { TodoListPage } from './todo-list-page';

export const TODO_LIST_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: TodoListPage,
  exact: true,
  path: TODO_CHILDREN_PATH.LIST,
  name: 'List',
};