import { createSlice } from '@reduxjs/toolkit';
import { AUTH_REDUCER_NAME, INITIAL_STATE } from './constants';
import { AuthState, AuthReducerCase } from './types';

const authReducerSlice = createSlice<AuthState, AuthReducerCase>({
  name: AUTH_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    authInit: (state, { payload }) => {
      state.isLogin = payload.isLogin;
      state.user = payload.user;
    },
    setAuthIsLogin: (state, { payload }) => {
      state.isLogin = payload;
    },
    setAuthUser: (state, { payload }) => {
      state.user = payload;
    },
    setStartAuthInit: (state) => {
      state.isLoading = true;
    },
    setStartAuthLogin: (state) => {
      state.isLoginLoading = true;
    },
    setStopAuthInit: (state) => {
      state.isLoading = false;
    },
    setStopAuthLogin: (state) => {
      state.isLoginLoading = false;
    },
  },
});

export const {
  authInit,
  setAuthIsLogin,
  setAuthUser,
  setStartAuthInit,
  setStartAuthLogin,
  setStopAuthInit,
  setStopAuthLogin,
} = authReducerSlice.actions;

export const AUTH_REDUCER_INJECT_CONFIG = {
  name: AUTH_REDUCER_NAME,
  reducer: authReducerSlice.reducer,
};
