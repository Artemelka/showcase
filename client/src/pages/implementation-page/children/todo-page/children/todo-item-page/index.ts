import { AppRouteConfig } from '../../../../../types';
import { TODO_CHILDREN_PATH } from '../../constants';
import { TodoItemPage } from './todo-item-page';

export type { TodoItemStore } from './redux';

export const TODO_ITEM_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: TodoItemPage,
  exact: true,
  path: TODO_CHILDREN_PATH.ITEM,
  name: 'Item',
};