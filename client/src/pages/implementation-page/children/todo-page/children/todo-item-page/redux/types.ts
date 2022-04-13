import { Action } from 'redux';
import { TodoItem } from '@/api';
import { BaseAction } from '@/app';
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

export type TodoItemStore = { [TODO_ITEM_REDUCER_NAME]: TodoItemState };