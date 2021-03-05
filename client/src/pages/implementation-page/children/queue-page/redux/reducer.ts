import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, QUEUE_REDUCER_NAME } from './constants';
import { QueueState, QueueReducerCase } from './types';

const queueReducerSlice = createSlice<QueueState, QueueReducerCase>({
  name: QUEUE_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    addTasks: (state, { payload }) => {
      state.tasks = {...state.tasks , ...payload};
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
    updateTasks: (state, { payload }) => {
      state.tasks = payload.reduce((acc, task) => {
        acc[task.id] = task;
        return acc;
      }, state.tasks);
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
  updateTasks,
} = queueReducerSlice.actions;
export const queueReducer = queueReducerSlice.reducer;