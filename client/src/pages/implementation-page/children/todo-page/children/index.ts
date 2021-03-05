import { AppRouterProps } from '../../../../types';
import { TODO_LIST_PAGE_ROUTE_CONFIG } from './todo-list-page';
import { TODO_ITEM_PAGE_ROUTE_CONFIG } from './todo-item-page';

export const TODO_CHILDREN_ROUTE_CONFIG: Array<AppRouterProps> = [
  TODO_LIST_PAGE_ROUTE_CONFIG,
  TODO_ITEM_PAGE_ROUTE_CONFIG,
];