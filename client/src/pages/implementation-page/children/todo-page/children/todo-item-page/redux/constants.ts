import { TodoItemState, TodoItem } from './types';

export const TODO_ITEM_REDUCER_NAME = 'todoItem';

const DEFAULT_ITEM: TodoItem = {
  category: '',
  id: '',
  parentId: '',
  status: 'todo',
  title: '',
};

export const INITIAL_STATE: TodoItemState = {
  item: DEFAULT_ITEM,
  isLoading: true,
}