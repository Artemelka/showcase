export const TODO_REDUCER_NAME = 'todo';

export const DEFAULT_PAGINATION_CONFIG = {
  limit: 50,
  offset: 0,
  total: 0,
} as const;

export const INITIAL_STATE = {
  activeCategory: 'all',
  filter: [],
  items: [],
  isLoading: true,
  paginationConfig: DEFAULT_PAGINATION_CONFIG,
} as const;
