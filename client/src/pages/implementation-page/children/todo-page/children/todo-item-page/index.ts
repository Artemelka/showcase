import { AppRouterProps } from '../../../../../types';
import { TODO_CHILDREN_PATH } from '../../constants';
import { TodoItemPage } from './todo-item-page';

export const TODO_ITEM_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: TodoItemPage,
  exact: true,
  path: TODO_CHILDREN_PATH.ITEM,
  name: 'Item',
};