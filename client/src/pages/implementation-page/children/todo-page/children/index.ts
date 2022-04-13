import { AppRouteConfig } from '@/pages';
import { TODO_LIST_PAGE_ROUTE_CONFIG } from './todo-list-page';
import { TODO_ITEM_PAGE_ROUTE_CONFIG } from './todo-item-page';

export type { TodoItemStore } from './todo-item-page';
export type { TodoStore } from './todo-list-page';

export const TODO_CHILDREN_ROUTE_CONFIG: Array<AppRouteConfig> = [
  TODO_LIST_PAGE_ROUTE_CONFIG,
  TODO_ITEM_PAGE_ROUTE_CONFIG,
];