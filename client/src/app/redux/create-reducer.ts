import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { history } from '../router/history';
import { ROUTER_REDUCER_KEY } from '../router/constants';

export const createReducer = (
  asyncReducers?: Record<string, Reducer>,
): Reducer =>
  combineReducers({
    [ROUTER_REDUCER_KEY]: connectRouter(history),
    ...(asyncReducers || {}),
  });
