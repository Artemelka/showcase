import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, TODO_ITEM_REDUCER_NAME } from './constants';
import { TodoItemState, TodoItemReducerCase } from './types';

const todoItemReducerSlice = createSlice<TodoItemState, TodoItemReducerCase>({
  name: TODO_ITEM_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    setItem: (state, { payload }) => {
      state.item = payload;
    },
    setLoadingStart: (state) => {
      state.isLoading = true;
    },
    setLoadingStop: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setItem, setLoadingStart, setLoadingStop } =
  todoItemReducerSlice.actions;

export const TODO_ITEM_REDUCER_INJECT_CONFIG = {
  name: TODO_ITEM_REDUCER_NAME,
  reducer: todoItemReducerSlice.reducer,
};
