import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, QUEUE_REDUCER_NAME } from './constants';
import { QueueState, QueueReducerCase } from './types';

const queueReducerSlice = createSlice<QueueState, QueueReducerCase>({
  name: QUEUE_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    addTasks: (state, { payload }) => {
      state.tasks = [...state.tasks , ...payload];
    },
    changeCreateTaskQuantity: (state, { payload }) => {
      state.createTaskQuantity = payload;
    },
    changeFilter: (state: QueueState, { payload }) => {
      state.filterValues = payload;
    },
    changeRequestCount: (state, { payload }) => {
      state.maxRequestCount = payload;
    },
    decrementCounter: (state) => {
      state.requestCount -= 1;
    },
    incrementCounter: (state) => {
      state.requestCount += 1;
    },
    replaceTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    updateTask: (state, { payload }) => {
      state.tasks = state.tasks.map(item =>
        item.id === payload.id ? payload : item
      );
    },
  },
});

export const {
  addTasks,
  changeCreateTaskQuantity,
  changeFilter,
  changeRequestCount,
  decrementCounter,
  incrementCounter,
  replaceTasks,
  updateTask,
} = queueReducerSlice.actions;
export const queueReducer = queueReducerSlice.reducer;