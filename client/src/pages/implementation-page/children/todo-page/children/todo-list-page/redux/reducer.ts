import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_PAGINATION_CONFIG, INITIAL_STATE, TODO_REDUCER_NAME } from './constants';
import { TodoState, TodoReducerCase, SetItemsAction } from './types';

const todoReducerSlice = createSlice<TodoState, TodoReducerCase>({
  name: TODO_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
    resetPagination: (state) => {
      state.paginationConfig = {
        ...DEFAULT_PAGINATION_CONFIG,
        limit: state.paginationConfig.limit,
      };
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
      state.isLoading = true;
    },
    stopLoader: state => {
      state.isLoading = false;
    },
  }
});

export const {
  changeFilter,
  resetPagination,
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