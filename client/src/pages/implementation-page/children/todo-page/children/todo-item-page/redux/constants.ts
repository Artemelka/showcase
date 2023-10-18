export const TODO_ITEM_REDUCER_NAME = 'todoItem';

const DEFAULT_ITEM = {
  category: '',
  id: '',
  parentId: '',
  status: 'todo',
  title: '',
} as const;

export const INITIAL_STATE = {
  item: DEFAULT_ITEM,
  isLoading: true,
} as const;
