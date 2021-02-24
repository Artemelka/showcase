import { createSelector } from 'reselect';
import { DropdownItemParams } from '@artemelka/react-components';
import { ROWS_OPTIONS } from '../constants';
import { TODO_REDUCER_NAME, INITIAL_STATE } from './constants';
import {
  AppStoreWithTodo,
  TodoState,
  TodoItem,
  FilterState,
  TodoItemStatus,
  PaginationConfig,
} from './types';

const todoStateSelector = (state: AppStoreWithTodo): TodoState =>
  state[TODO_REDUCER_NAME] || INITIAL_STATE;

export const todoListSelector = createSelector(
  [todoStateSelector],
  (todoState): Array<TodoItem> => todoState.items
);

export const todoIsLoadingSelector = createSelector(
  [todoStateSelector],
  (todoState): boolean => todoState.startLoaderCount !== 0
);

export const todoPaginationSelector = createSelector(
  [todoStateSelector],
  (todoState): PaginationConfig => todoState.paginationConfig
);

export const todoActiveCategorySelector = createSelector(
  [todoStateSelector],
  (todoState): string => todoState.activeCategory
);

export const todoFilterSelector = createSelector(
  [todoStateSelector],
  (todoState): Array<FilterState> => todoState.filter
);

export const todoFilterStatusesSelector = createSelector(
  [todoFilterSelector],
  (filter): Array<TodoItemStatus | ''> => filter.map(item => item.value)
);

export const todoPaginationTotalSelector = createSelector(
  [todoPaginationSelector],
  (pagination): number => pagination.total
);

export const todoPaginationLimitSelector = createSelector(
  [todoPaginationSelector],
  (paginationConfig): Array<DropdownItemParams> => ROWS_OPTIONS.filter(option => option.value === `${paginationConfig.limit}`)
);

export const todoPaginationOffsetSelector = createSelector(
  [todoPaginationSelector],
  (paginationConfig): number => paginationConfig.offset
);