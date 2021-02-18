import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { appHistory } from './app-history';
import { APP_STORE_KEYS } from './constants';

export const ROOT_REDUCERS = {
  [APP_STORE_KEYS.ROUTER]: connectRouter(appHistory),
};

export const createReducer = (asyncReducers?: Record<string, Reducer>): Reducer => combineReducers({
  ...ROOT_REDUCERS,
  ...(asyncReducers ? asyncReducers : {})
});