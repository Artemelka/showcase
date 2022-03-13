import { createSelector } from 'reselect';
import { TodoItem } from '@/api';
import { INITIAL_STATE, TODO_ITEM_REDUCER_NAME } from './constants';
import { AppStoreWithTodoItem, TodoItemState } from './types';

const TodoItemStateSelector = (state: AppStoreWithTodoItem): TodoItemState =>
  state[TODO_ITEM_REDUCER_NAME] || INITIAL_STATE;

export const todoItemSelector = createSelector(
  [TodoItemStateSelector],
  (state): TodoItem => state.item
);

export const todoItemIsLoadingSelector = createSelector(
  [TodoItemStateSelector],
  (state): boolean => state.isLoading
);