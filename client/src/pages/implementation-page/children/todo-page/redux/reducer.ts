import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, TODO_REDUCER_NAME } from './constants';
import { TodoState, TodoReducerCase, SetItemsAction } from './types';

const todoReducerSlice = createSlice<TodoState, TodoReducerCase>({
  name: TODO_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setCategory: (state, { payload }) => {
      state.activeCategory = payload;
    },
    setItems: (state, { payload }: SetItemsAction) => {
      state.items = payload;
    },
    setLimit: (state, { payload }) => {
      state.paginationConfig = {
        ...state.paginationConfig,
        limit: payload,
      }
    },
    setPagination: (state, { payload }) => {
      state.paginationConfig = payload;
    },
    startLoader: state => {
      state.startLoaderCount += 1;
    },
    stopLoader: state => {
      state.startLoaderCount -= 1;
    },
  }
});

export const {
  changeFilter,
  setCategory,
  setItems,
  setLimit,
  setPagination,
  startLoader,
  stopLoader,
} = todoReducerSlice.actions;

export const TODO_REDUCER_INJECT_CONFIG = {
  name: TODO_REDUCER_NAME,
  reducer: todoReducerSlice.reducer
};