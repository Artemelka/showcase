import { Action } from 'redux';
import { TodoItem } from '../../../../../../../api';
import { AppStore, BaseAction } from '../../../../../../../app';
import { TODO_ITEM_REDUCER_NAME } from './constants';

export type TodoItemState = {
  item: TodoItem;
  isLoading: boolean;
}

export type SetItemAction = BaseAction<TodoItem>;

export type TodoItemReducerCase = {
  setItem: (state: TodoItemState, action: SetItemAction) => void;
  setLoadingStart: (state: TodoItemState, action: Action<string>) => void;
  setLoadingStop: (state: TodoItemState, action: Action<string>) => void;
};

export type AppStoreWithTodoItem = AppStore & { [TODO_ITEM_REDUCER_NAME]: TodoItemState };
export type { BaseAction } from '../../../../../../../app';
export type { TodoItem } from '../../../../../../../api';