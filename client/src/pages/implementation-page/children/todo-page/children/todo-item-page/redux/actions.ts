import { Action } from 'redux';

export const GET_TODO_ITEM_ACTION_NAME = 'GET_TODO_ITEM_ACTION';
export const getTodoItemActionSaga = (): Action<string> => ({ type: GET_TODO_ITEM_ACTION_NAME })