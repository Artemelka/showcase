import { TodoState } from './types';

export const TODO_REDUCER_NAME = 'todo';

export const INITIAL_STATE: TodoState = {
  activeCategory: 'all',
  filter: [],
  items: [],
  startLoaderCount: 0,
  paginationConfig: {
    limit: 50,
    offset: 0,
    total: 0,
  },
};