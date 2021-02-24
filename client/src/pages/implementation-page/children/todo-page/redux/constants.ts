import { TodoState, PaginationConfig } from './types';

export const TODO_REDUCER_NAME = 'todo';

export const DEFAULT_PAGINATION_CONFIG: PaginationConfig = {
  limit: 50,
  offset: 0,
  total: 0,
}

export const INITIAL_STATE: TodoState = {
  activeCategory: 'all',
  filter: [],
  items: [],
  startLoaderCount: 0,
  paginationConfig: DEFAULT_PAGINATION_CONFIG,
};