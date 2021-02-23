import { Action } from 'redux';
import { TodoItem, TodoItemStatus } from '../../../../../api';
import { AppStore, BaseAction } from '../../../../../app';
import { TODO_REDUCER_NAME } from './constants';

export type FilterState = {
  id: string;
  value: TodoItemStatus | '';
};

export type PaginationConfig = {
  limit: number;
  offset: number;
  total: number;
};

export type TodoState = {
  activeCategory: string;
  startLoaderCount: number;
  items: Array<TodoItem>;
  filter: Array<FilterState>;
  paginationConfig: PaginationConfig;
};

export type SetItemsAction = BaseAction<Array<TodoItem>>;

export type ChangeFilterAction = BaseAction<Array<FilterState>>;

export type SetPaginationAction = BaseAction<PaginationConfig>;

export type SetCategoryAction = BaseAction<string>;

export type SetLimitAction = BaseAction<number>;

export type TodoReducerCase = {
  changeFilter: (state: TodoState, action: ChangeFilterAction) => void;
  setCategory: (state: TodoState, action: SetCategoryAction) => void;
  setItems: (state: TodoState, action: SetItemsAction) => void;
  setLimit: (state: TodoState, action: SetLimitAction) => void;
  setPagination: (state: TodoState, action: SetPaginationAction) => void;
  startLoader: (state: TodoState) => void;
  stopLoader: (state: TodoState) => void;
};

export type AppStoreWithTodo = AppStore & {[TODO_REDUCER_NAME]: TodoState};
export type { BaseAction } from '../../../../../app';
export type {
  GetCategoryParams,
  Response,
  TodoItem,
  TodoItemStatus,
} from '../../../../../api';
export type { Action } from 'redux';